export class Config {
    open: boolean;
    side_nuv_button:any;
}

//設定値
export const confList : Config = {
    open:false, //default set  *) true or false
    side_nuv_button:[
        {title:"メインメニュー",path:"/",icon:"subject"},
        {title:"サイドメニュー",path:"/sub",icon:"face"}
    ]

}