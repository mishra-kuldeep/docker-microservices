let GroupModel = require('../models/GroupModel')
let GroupMemberModel = require('../models/GroupMemberModel')




class GroupController {

/* Add Group section start */
async addGroup(req,res){
    try{
        let group = await GroupModel.findOne({user_id:req.body.user_id,name:req.body.name});
        if(!group){

            let groupsave = await GroupModel.create(req.body);

            return res.status(200).json({
            data:groupsave,
            success: true,
            message: 'Group name saved successfully.'
            });     
            
            

        }else{
            return res.status(409).json({
            success: false,
            message: 'Group name is already added'
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
/*end group section */

/*add group member */
async addGroupMember(req,res){
    try{
        let phone = await GroupMemberModel.findOne({phone:req.body.phone,group_id: req.body.group_id});
        if(!phone){
            /* checking Phone */
            const group = await GroupModel.findById(
                req.body.group_id
            );

            if (!group) {
                return res.status(404).json({
                    success: false,
                    message: 'Group not found'
                });
            }

            /*end checking phone section*/
            
            let groupmembersave = await GroupMemberModel.create(req.body);

            return res.status(200).json({
            data:groupmembersave,
            success: true,
            message: 'Group name saved successfully.'
            });  
            
            

        }else{
            return res.status(409).json({
            success: false,
            message: 'Group name is already added'
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
/*end add group member section*/


}

module.exports = new GroupController();