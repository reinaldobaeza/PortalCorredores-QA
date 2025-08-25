/*!   GeneXus C# 16_0_10-142546 on 4/19/2021 23:59:49.75
*/
gx.evt.autoSkip = false;
gx.define('wwpbaseobjects.secuserrole', false, function () {
   this.ServerClass =  "wwpbaseobjects.secuserrole" ;
   this.PackageName =  "GeneXus.Programs" ;
   this.setObjectType("trn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
   };
   this.Valid_Secuserid=function()
   {
      return this.validSrvEvt("Valid_Secuserid", 0).then((function (ret) {
      return ret;
      }).closure(this));
   }
   this.Valid_Secroleid=function()
   {
      return this.validSrvEvt("Valid_Secroleid", 0).then((function (ret) {
      return ret;
      }).closure(this));
   }
   this.e110d16_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e120d16_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57];
   this.GXLastCtrlId =57;
   GXValidFnc[2]={ id: 2, fld:"",grid:0};
   GXValidFnc[3]={ id: 3, fld:"TABLEMAIN",grid:0};
   GXValidFnc[4]={ id: 4, fld:"",grid:0};
   GXValidFnc[5]={ id: 5, fld:"",grid:0};
   GXValidFnc[6]={ id: 6, fld:"TITLE", format:0,grid:0};
   GXValidFnc[7]={ id: 7, fld:"",grid:0};
   GXValidFnc[8]={ id: 8, fld:"",grid:0};
   GXValidFnc[9]={ id: 9, fld:"",grid:0};
   GXValidFnc[10]={ id: 10, fld:"",grid:0};
   GXValidFnc[11]={ id: 11, fld:"",grid:0};
   GXValidFnc[12]={ id: 12, fld:"BTN_FIRST",grid:0,evt:"e130d16_client",std:"FIRST"};
   GXValidFnc[13]={ id: 13, fld:"",grid:0};
   GXValidFnc[14]={ id: 14, fld:"BTN_PREVIOUS",grid:0,evt:"e140d16_client",std:"PREVIOUS"};
   GXValidFnc[15]={ id: 15, fld:"",grid:0};
   GXValidFnc[16]={ id: 16, fld:"BTN_NEXT",grid:0,evt:"e150d16_client",std:"NEXT"};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"BTN_LAST",grid:0,evt:"e160d16_client",std:"LAST"};
   GXValidFnc[19]={ id: 19, fld:"",grid:0};
   GXValidFnc[20]={ id: 20, fld:"BTN_SELECT",grid:0,evt:"e170d16_client",std:"SELECT"};
   GXValidFnc[21]={ id: 21, fld:"",grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[24]={ id: 24, fld:"",grid:0};
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id:28 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Secuserid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERID",gxz:"Z141SecUserId",gxold:"O141SecUserId",gxvar:"A141SecUserId",ucs:[],op:[38],ip:[38,28],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A141SecUserId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z141SecUserId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SECUSERID",gx.O.A141SecUserId,0)},c2v:function(){if(this.val()!==undefined)gx.O.A141SecUserId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SECUSERID",'.')},nac:gx.falseFn};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id:33 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Secroleid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECROLEID",gxz:"Z139SecRoleId",gxold:"O139SecRoleId",gxvar:"A139SecRoleId",ucs:[],op:[48,43],ip:[48,43,33,28],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A139SecRoleId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z139SecRoleId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SECROLEID",gx.O.A139SecRoleId,0)},c2v:function(){if(this.val()!==undefined)gx.O.A139SecRoleId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SECROLEID",'.')},nac:gx.falseFn};
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id:38 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERNAME",gxz:"Z149SecUserName",gxold:"O149SecUserName",gxvar:"A149SecUserName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A149SecUserName=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z149SecUserName=Value},v2c:function(){gx.fn.setControlValue("SECUSERNAME",gx.O.A149SecUserName,0)},c2v:function(){if(this.val()!==undefined)gx.O.A149SecUserName=this.val()},val:function(){return gx.fn.getControlValue("SECUSERNAME")},nac:gx.falseFn};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id: 40, fld:"",grid:0};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id:43 ,lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECROLENAME",gxz:"Z148SecRoleName",gxold:"O148SecRoleName",gxvar:"A148SecRoleName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A148SecRoleName=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z148SecRoleName=Value},v2c:function(){gx.fn.setControlValue("SECROLENAME",gx.O.A148SecRoleName,0)},c2v:function(){if(this.val()!==undefined)gx.O.A148SecRoleName=this.val()},val:function(){return gx.fn.getControlValue("SECROLENAME")},nac:gx.falseFn};
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id: 45, fld:"",grid:0};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   GXValidFnc[48]={ id:48 ,lvl:0,type:"svchar",len:120,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECROLEDESCRIPTION",gxz:"Z147SecRoleDescription",gxold:"O147SecRoleDescription",gxvar:"A147SecRoleDescription",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A147SecRoleDescription=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z147SecRoleDescription=Value},v2c:function(){gx.fn.setControlValue("SECROLEDESCRIPTION",gx.O.A147SecRoleDescription,0)},c2v:function(){if(this.val()!==undefined)gx.O.A147SecRoleDescription=this.val()},val:function(){return gx.fn.getControlValue("SECROLEDESCRIPTION")},nac:gx.falseFn};
   GXValidFnc[49]={ id: 49, fld:"",grid:0};
   GXValidFnc[50]={ id: 50, fld:"",grid:0};
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[53]={ id: 53, fld:"BTN_ENTER",grid:0,evt:"e110d16_client",std:"ENTER"};
   GXValidFnc[54]={ id: 54, fld:"",grid:0};
   GXValidFnc[55]={ id: 55, fld:"BTN_CANCEL",grid:0,evt:"e120d16_client"};
   GXValidFnc[56]={ id: 56, fld:"",grid:0};
   GXValidFnc[57]={ id: 57, fld:"BTN_DELETE",grid:0,evt:"e180d16_client",std:"DELETE"};
   this.A141SecUserId = 0 ;
   this.Z141SecUserId = 0 ;
   this.O141SecUserId = 0 ;
   this.A139SecRoleId = 0 ;
   this.Z139SecRoleId = 0 ;
   this.O139SecRoleId = 0 ;
   this.A149SecUserName = "" ;
   this.Z149SecUserName = "" ;
   this.O149SecUserName = "" ;
   this.A148SecRoleName = "" ;
   this.Z148SecRoleName = "" ;
   this.O148SecRoleName = "" ;
   this.A147SecRoleDescription = "" ;
   this.Z147SecRoleDescription = "" ;
   this.O147SecRoleDescription = "" ;
   this.A141SecUserId = 0 ;
   this.A139SecRoleId = 0 ;
   this.A149SecUserName = "" ;
   this.A148SecRoleName = "" ;
   this.A147SecRoleDescription = "" ;
   this.Events = {"e110d16_client": ["ENTER", true] ,"e120d16_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["VALID_SECUSERID"] = [[{av:'A141SecUserId',fld:'SECUSERID',pic:'ZZZ9'},{av:'A149SecUserName',fld:'SECUSERNAME',pic:''}],[{av:'A149SecUserName',fld:'SECUSERNAME',pic:''}]];
   this.EvtParms["VALID_SECROLEID"] = [[{av:'A141SecUserId',fld:'SECUSERID',pic:'ZZZ9'},{av:'A139SecRoleId',fld:'SECROLEID',pic:'ZZZ9'},{av:'Gx_mode',fld:'vMODE',pic:'@!'}],[{av:'A149SecUserName',fld:'SECUSERNAME',pic:''},{av:'A148SecRoleName',fld:'SECROLENAME',pic:''},{av:'A147SecRoleDescription',fld:'SECROLEDESCRIPTION',pic:''},{av:'Gx_mode',fld:'vMODE',pic:'@!'},{av:'Z141SecUserId'},{av:'Z139SecRoleId'},{av:'Z149SecUserName'},{av:'Z148SecRoleName'},{av:'Z147SecRoleDescription'},{ctrl:'BTN_DELETE',prop:'Enabled'},{ctrl:'BTN_ENTER',prop:'Enabled'}]];
   this.EnterCtrl = ["BTN_ENTER"];
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(wwpbaseobjects.secuserrole);});
