if ($request.url.includes('/v2/user/vip_info_by_group.json')) {
    let body = JSON.parse($response.body);

    body.data.is_expire = 0;                          
    body.data.expire_days = 26747;                    
    body.data.vip_type = 3;                           
    body.data.sub_type = 3;                           
    body.data.screen_name = "aleotoidayy";  
    body.data.valid_time = 1752614400;                
    body.data.invalid_time = 4070908800;              
    body.data.vip_status = 1;                         

    $done({ body: JSON.stringify(body) });
} else {
    $done({});
}
