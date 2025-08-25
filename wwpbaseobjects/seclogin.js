/*!   GeneXus C# 16_0_10-142546 on 4/20/2021 0:0:1.90
*/
gx.evt.autoSkip = false;
gx.define('wwpbaseobjects.seclogin', false, function () {
   this.ServerClass =  "wwpbaseobjects.seclogin" ;
   this.PackageName =  "GeneXus.Programs" ;
   this.setObjectType("web");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.autoRefresh = true;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
      this.A149SecUserName=gx.fn.getControlValue("SECUSERNAME") ;
      this.A150SecUserPassword=gx.fn.getControlValue("SECUSERPASSWORD") ;
      this.A141SecUserId=gx.fn.getIntegerValue("SECUSERID",'.') ;
      this.AV12WWPContext=gx.fn.getControlValue("vWWPCONTEXT") ;
   };
   this.e12322_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e14322_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,40,42,43,44,45,46,47];
   this.GXLastCtrlId =47;
   GXValidFnc[2]={ id: 2, fld:"",grid:0};
   GXValidFnc[3]={ id: 3, fld:"LAYOUTMAINTABLE",grid:0};
   GXValidFnc[4]={ id: 4, fld:"",grid:0};
   GXValidFnc[5]={ id: 5, fld:"",grid:0};
   GXValidFnc[6]={ id: 6, fld:"TABLEMAIN",grid:0};
   GXValidFnc[7]={ id: 7, fld:"",grid:0};
   GXValidFnc[8]={ id: 8, fld:"",grid:0};
   GXValidFnc[9]={ id: 9, fld:"TABLELOGINCONTENT",grid:0};
   GXValidFnc[10]={ id: 10, fld:"",grid:0};
   GXValidFnc[11]={ id: 11, fld:"",grid:0};
   GXValidFnc[12]={ id: 12, fld:"TABLELOGIN",grid:0};
   GXValidFnc[13]={ id: 13, fld:"",grid:0};
   GXValidFnc[14]={ id: 14, fld:"",grid:0};
   GXValidFnc[15]={ id: 15, fld:"LOGOLOGIN",grid:0};
   GXValidFnc[16]={ id: 16, fld:"",grid:0};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"UNNAMEDTABLE1",grid:0};
   GXValidFnc[19]={ id: 19, fld:"",grid:0};
   GXValidFnc[20]={ id: 20, fld:"",grid:0};
   GXValidFnc[21]={ id: 21, fld:"",grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id:23 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSECUSERNAME",gxz:"ZV7SecUserName",gxold:"OV7SecUserName",gxvar:"AV7SecUserName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV7SecUserName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV7SecUserName=Value},v2c:function(){gx.fn.setControlValue("vSECUSERNAME",gx.O.AV7SecUserName,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV7SecUserName=this.val()},val:function(){return gx.fn.getControlValue("vSECUSERNAME")},nac:gx.falseFn};
   GXValidFnc[24]={ id: 24, fld:"",grid:0};
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id:28 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSECUSERPASSWORD",gxz:"ZV8SecUserPassword",gxold:"OV8SecUserPassword",gxvar:"AV8SecUserPassword",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV8SecUserPassword=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV8SecUserPassword=Value},v2c:function(){gx.fn.setControlValue("vSECUSERPASSWORD",gx.O.AV8SecUserPassword,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV8SecUserPassword=this.val()},val:function(){return gx.fn.getControlValue("vSECUSERPASSWORD")},nac:gx.falseFn};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"FORGOTPASSWORD", format:1,grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id: 34, fld:"BTNENTER",grid:0,evt:"e12322_client",std:"ENTER"};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"UNNAMEDTABLE2",grid:0};
   GXValidFnc[40]={ id: 40, fld:"NOACCOUNT", format:0,grid:0};
   GXValidFnc[42]={ id: 42, fld:"REGISTERUSER", format:0,grid:0};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id: 45, fld:"TABLELOGINERROR",grid:0};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   this.AV7SecUserName = "" ;
   this.ZV7SecUserName = "" ;
   this.OV7SecUserName = "" ;
   this.AV8SecUserPassword = "" ;
   this.ZV8SecUserPassword = "" ;
   this.OV8SecUserPassword = "" ;
   this.AV7SecUserName = "" ;
   this.AV8SecUserPassword = "" ;
   this.A150SecUserPassword = "" ;
   this.A149SecUserName = "" ;
   this.A141SecUserId = 0 ;
   this.AV12WWPContext = {UserId:0,UserName:"",UserDescripcion:""} ;
   this.Events = {"e12322_client": ["ENTER", true] ,"e14322_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["START"] = [[],[{av:'gx.fn.getCtrlProperty("TABLELOGINERROR","Visible")',ctrl:'TABLELOGINERROR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LAYOUTMAINTABLE","Class")',ctrl:'LAYOUTMAINTABLE',prop:'Class'}]];
   this.EvtParms["ENTER"] = [[{av:'A149SecUserName',fld:'SECUSERNAME',pic:''},{av:'AV7SecUserName',fld:'vSECUSERNAME',pic:''},{av:'A150SecUserPassword',fld:'SECUSERPASSWORD',pic:''},{av:'AV8SecUserPassword',fld:'vSECUSERPASSWORD',pic:''},{av:'A141SecUserId',fld:'SECUSERID',pic:'ZZZ9'},{av:'AV12WWPContext',fld:'vWWPCONTEXT',pic:''}],[{av:'AV12WWPContext',fld:'vWWPCONTEXT',pic:''},{av:'gx.fn.getCtrlProperty("TABLELOGINERROR","Visible")',ctrl:'TABLELOGINERROR',prop:'Visible'}]];
   this.EnterCtrl = ["BTNENTER"];
   this.setVCMap("A149SecUserName", "SECUSERNAME", 0, "svchar", 100, 0);
   this.setVCMap("A150SecUserPassword", "SECUSERPASSWORD", 0, "svchar", 100, 0);
   this.setVCMap("A141SecUserId", "SECUSERID", 0, "int", 4, 0);
   this.setVCMap("AV12WWPContext", "vWWPCONTEXT", 0, "WWPBaseObjects\WWPContext", 0, 0);
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(wwpbaseobjects.seclogin);});
