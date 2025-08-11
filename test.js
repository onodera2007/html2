const text = ` .{
    .hadal_entrance_list = .{
        //稳定节点不能修改！                                       
        .{ .entrance_id = 2, .zone_id = 61001 },
        //纷争节点不能修改！                                       
        .{ .entrance_id = 3, .zone_id = 61002 },
        //剧变节点!                                           
        .{ .entrance_id = 1, .zone_id = 62027 },
        //危局强袭战!                                          
        .{ .entrance_id = 9, .zone_id = 69017 },
    },

    // Overrides avatar parameters. By default they're maxed out.
    .avatar_overrides = .{
        // Example of avatar override configuration to set Orphie's Mindscape to 1.
        // .{                                             
        //     .id = 1301, // Orphie's ID. See AvatarBaseTemplateTb for more.
        //     .level = 60,                               
        //     .unlocked_talent_num = 1, // Mindscape. By default it's set to 6.
        // },                                             
    },

    // Adds weapons (W-Engines) with specified parameters.
    .weapons = .{
        // Example of weapon configuration.               
        // .{                                             
        //     .id = 14130, // Orphie's Signature W-Engine ID. See WeaponTemplateTb for more.
        //     .level = 60,                               
        //     .star = 5,                                 
        //     .refine_level = 1, // Overclock            
        // },                                             
    },

    // Adds equipment (Drive Discs) with specified parameters.
    .equipment = .{
        // Example of Drive Disc configuration.           
        // .{                                             
        //     .id = 31041, // ID of Woodpecker Electro [1]. See EquipmentTemplateTb for more.
        //     .level = 15,                               
        //     .star = 1,                                 
        //     .properties = .{                           
        //         // Only 1 main property is allowed.    
        //         // SYNTAX: .{ property_type, base_value, add_value },
        //         .{ 11103, 550, 0 },                    
        //     },                                         
        //     .sub_properties = .{                       
        //         // Up to 4 sub-properties is allowed.  
        //         // SYNTAX: .{ property_type, base_value, add_value },
        //         .{ 12103, 19, 2 },                     
        //         .{ 13102, 480, 1 },                    
        //     },                                         
        // },                                             
    },
}`;
const regex = /\.entrance_id\s*=\s*(1|9),\s*\.zone_id\s*=\s*(\d+)/g;
let match;

let temp = {}; // 临时对象
while ((match = regex.exec(text)) !== null) {
  temp[`entrance_${match[1]}`] = Number(match[2]);
}

// 用解构赋值直接生成常量
const { entrance_1, entrance_9 } = temp;

console.log(entrance_1); // 62027
console.log(entrance_9); 
save()
function save() {
    const text = "这里是你要保存的内容"; // 你的文本内容

    // 创建一个 Blob 对象，指定文件内容和类型
    const blob = new Blob([text], { type: 'text/plain' });

    // 创建一个下载链接
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = "gameplay_settings.default.zon"; // 设置默认文件名

    // 触发点击事件，模拟下载
    link.click();
}