/*!   GeneXus C# 16_0_10-142546 on 4/19/2021 23:59:49.12
*/
gx.evt.autoSkip = false;
gx.define('wwpbaseobjects.secusercorredor', false, function () {
   this.ServerClass =  "wwpbaseobjects.secusercorredor" ;
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
   this.Valid_Pccorredorid=function()
   {
      return this.validSrvEvt("Valid_Pccorredorid", 0).then((function (ret) {
      return ret;
      }).closure(this));
   }
   this.e110e17_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e120e17_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42];
   this.GXLastCtrlId =42;
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
   GXValidFnc[12]={ id: 12, fld:"BTN_FIRST",grid:0,evt:"e130e17_client",std:"FIRST"};
   GXValidFnc[13]={ id: 13, fld:"",grid:0};
   GXValidFnc[14]={ id: 14, fld:"BTN_PREVIOUS",grid:0,evt:"e140e17_client",std:"PREVIOUS"};
   GXValidFnc[15]={ id: 15, fld:"",grid:0};
   GXValidFnc[16]={ id: 16, fld:"BTN_NEXT",grid:0,evt:"e150e17_client",std:"NEXT"};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"BTN_LAST",grid:0,evt:"e160e17_client",std:"LAST"};
   GXValidFnc[19]={ id: 19, fld:"",grid:0};
   GXValidFnc[20]={ id: 20, fld:"BTN_SELECT",grid:0,evt:"e170e17_client",std:"SELECT"};
   GXValidFnc[21]={ id: 21, fld:"",grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[24]={ id: 24, fld:"",grid:0};
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id:28 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Secuserid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERID",gxz:"Z141SecUserId",gxold:"O141SecUserId",gxvar:"A141SecUserId",ucs:[],op:[],ip:[28],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A141SecUserId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z141SecUserId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SECUSERID",gx.O.A141SecUserId,0)},c2v:function(){if(this.val()!==undefined)gx.O.A141SecUserId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SECUSERID",'.')},nac:gx.falseFn};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id:33 ,lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pccorredorid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PCCORREDORID",gxz:"Z31PCCorredorId",gxold:"O31PCCorredorId",gxvar:"A31PCCorredorId",ucs:[],op:[],ip:[28,33],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A31PCCorredorId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z31PCCorredorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PCCORREDORID",gx.O.A31PCCorredorId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A31PCCorredorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PCCORREDORID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 33 , function() {
   });
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id: 38, fld:"BTN_ENTER",grid:0,evt:"e110e17_client",std:"ENTER"};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id: 40, fld:"BTN_CANCEL",grid:0,evt:"e120e17_client"};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"BTN_DELETE",grid:0,evt:"e180e17_client",std:"DELETE"};
   this.A141SecUserId = 0 ;
   this.Z141SecUserId = 0 ;
   this.O141SecUserId = 0 ;
   this.A31PCCorredorId = 0 ;
   this.Z31PCCorredorId = 0 ;
   this.O31PCCorredorId = 0 ;
   this.A31PCCorredorId = 0 ;
   this.A141SecUserId = 0 ;
   this.Events = {"e110e17_client": ["ENTER", true] ,"e120e17_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["VALID_SECUSERID"] = [[{av:'A141SecUserId',fld:'SECUSERID',pic:'ZZZ9'}],[]];
   this.EvtParms["VALID_PCCORREDORID"] = [[{av:'A31PCCorredorId',fld:'PCCORREDORID',pic:'ZZZZZZZZZ9'},{av:'A141SecUserId',fld:'SECUSERID',pic:'ZZZ9'},{av:'Gx_mode',fld:'vMODE',pic:'@!'}],[{av:'Gx_mode',fld:'vMODE',pic:'@!'},{av:'Z31PCCorredorId'},{av:'Z141SecUserId'},{ctrl:'BTN_DELETE',prop:'Enabled'},{ctrl:'BTN_ENTER',prop:'Enabled'}]];
   this.EnterCtrl = ["BTN_ENTER"];
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(wwpbaseobjects.secusercorredor);});
