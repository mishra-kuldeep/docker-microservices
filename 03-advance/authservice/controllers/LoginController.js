let UserModel = require('../models/UserModel')
let UserBusinessModel = require('../models/UserBusinessModel')
let RoleModel = require('../models/RoleModel')


class LoginController {
/*register section start */
async register (req,res){
    try{
        if(req.body.phone !=null){
            let user = await UserModel.findOne({phone:req.body.phone});

            let role = await RoleModel.findOne({name:'app-admin'});
            if (!role) {
                return res.status(500).json({
                    success: false,
                    message: 'Default role not found'
                });
            }
            
            if(!user){
                req.body.otp = Math.floor(1000 + Math.random() * 9000);
                req.body.otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000)
                req.body.role = role._id
                await UserModel.create(req.body)
                return res.status(200).json({success: true,message: 'User has beed registred'});
            }else{
                user.otp = Math.floor(1000 + Math.random() * 9000);
                user.otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000)
                await user.save()
                return res.status(200).json({success: true,message: 'OTP has been sent on registred Phone Number'});
            }
        }else{
            return res.status(202).json({
                success: false,
                message: 'Phone is required'
            });
        }
    }catch(e){
        
            console.error(e);

            return res.status(500).json({
                success: false,
                message: 'Internal server error'
            });
    }
    
}
/*end register section */

async verify(req,res){
    try{
        const { phone, otp } = req.body;

        const user = await UserModel.findOne({ phone });

        if (!user) {
        return res.status(404).json({
            success: false,
            message: 'User not found'
        });
        }

        if (user.otp !== otp) {
        return res.status(400).json({
            success: false,
            message: 'Invalid OTP'
        });
        }

        if (new Date() > user.otpExpiresAt) {
        return res.status(400).json({
            success: false,
            message: 'OTP expired'
        });
        }

        user.isVerified = true;
        user.otp = null;
        user.otpExpiresAt = null;

        await user.save();

        return res.status(200).json({
        success: true,
        message: 'Phone verified successfully'
        });

    }catch(e){
            console.error(e);
            return res.status(500).json({
                success: false,
                message: 'Internal server error'
            });
    }

}

/* update business section start */
async updateBusiness(req,res){
    try{
        let business = await UserBusinessModel.findOne({user_id:req.body.user_id,business_id:req.body.business_id});
        if(!business){
            let business = await UserBusinessModel.create(req.body);

            return res.status(200).json({
            success: true,
            message: 'Business saved successfully.'
            });

        }else{
            return res.status(409).json({
            success: false,
            message: 'Business already added'
            });
        }
    }catch(e){
        console.error(e);

        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
}
/*end business update section */


}

module.exports = new LoginController();