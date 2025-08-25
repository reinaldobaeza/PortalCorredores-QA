/*!   GeneXus C# 16_0_10-142546 on 4/19/2021 23:59:42.73
*/
gx.evt.autoSkip = false;
gx.define('wwpbaseobjects.usercustomizations', false, function () {
   this.ServerClass =  "wwpbaseobjects.usercustomizations" ;
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
   this.Valid_Usercustomizationsid=function()
   {
      return this.validCliEvt("Valid_Usercustomizationsid", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("USERCUSTOMIZATIONSID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
          if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
      });
   }
   this.Valid_Usercustomizationskey=function()
   {
      return this.validSrvEvt("Valid_Usercustomizationskey", 0).then((function (ret) {
      return ret;
      }).closure(this));
   }
   this.e11011_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12011_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47];
   this.GXLastCtrlId =47;
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
   GXValidFnc[12]={ id: 12, fld:"BTN_FIRST",grid:0,evt:"e13011_client",std:"FIRST"};
   GXValidFnc[13]={ id: 13, fld:"",grid:0};
   GXValidFnc[14]={ id: 14, fld:"BTN_PREVIOUS",grid:0,evt:"e14011_client",std:"PREVIOUS"};
   GXValidFnc[15]={ id: 15, fld:"",grid:0};
   GXValidFnc[16]={ id: 16, fld:"BTN_NEXT",grid:0,evt:"e15011_client",std:"NEXT"};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"BTN_LAST",grid:0,evt:"e16011_client",std:"LAST"};
   GXValidFnc[19]={ id: 19, fld:"",grid:0};
   GXValidFnc[20]={ id: 20, fld:"BTN_SELECT",grid:0,evt:"e17011_client",std:"SELECT"};
   GXValidFnc[21]={ id: 21, fld:"",grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[24]={ id: 24, fld:"",grid:0};
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id:28 ,lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Usercustomizationsid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"USERCUSTOMIZATIONSID",gxz:"Z1UserCustomizationsId",gxold:"O1UserCustomizationsId",gxvar:"A1UserCustomizationsId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A1UserCustomizationsId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z1UserCustomizationsId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("USERCUSTOMIZATIONSID",gx.O.A1UserCustomizationsId,0)},c2v:function(){if(this.val()!==undefined)gx.O.A1UserCustomizationsId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("USERCUSTOMIZATIONSID",'.')},nac:gx.falseFn};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id:33 ,lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:this.Valid_Usercustomizationskey,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"USERCUSTOMIZATIONSKEY",gxz:"Z2UserCustomizationsKey",gxold:"O2UserCustomizationsKey",gxvar:"A2UserCustomizationsKey",ucs:[],op:[38],ip:[38,33,28],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A2UserCustomizationsKey=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z2UserCustomizationsKey=Value},v2c:function(){gx.fn.setControlValue("USERCUSTOMIZATIONSKEY",gx.O.A2UserCustomizationsKey,0)},c2v:function(){if(this.val()!==undefined)gx.O.A2UserCustomizationsKey=this.val()},val:function(){return gx.fn.getControlValue("USERCUSTOMIZATIONSKEY")},nac:gx.falseFn};
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id:38 ,lvl:0,type:"vchar",len:2097152,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"USERCUSTOMIZATIONSVALUE",gxz:"Z3UserCustomizationsValue",gxold:"O3UserCustomizationsValue",gxvar:"A3UserCustomizationsValue",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A3UserCustomizationsValue=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z3UserCustomizationsValue=Value},v2c:function(){gx.fn.setControlValue("USERCUSTOMIZATIONSVALUE",gx.O.A3UserCustomizationsValue,0)},c2v:function(){if(this.val()!==undefined)gx.O.A3UserCustomizationsValue=this.val()},val:function(){return gx.fn.getControlValue("USERCUSTOMIZATIONSVALUE")},nac:gx.falseFn};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id: 40, fld:"",grid:0};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"BTN_ENTER",grid:0,evt:"e11011_client",std:"ENTER"};
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id: 45, fld:"BTN_CANCEL",grid:0,evt:"e12011_client"};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"BTN_DELETE",grid:0,evt:"e18011_client",std:"DELETE"};
   this.A1UserCustomizationsId = 0 ;
   this.Z1UserCustomizationsId = 0 ;
   this.O1UserCustomizationsId = 0 ;
   this.A2UserCustomizationsKey = "" ;
   this.Z2UserCustomizationsKey = "" ;
   this.O2UserCustomizationsKey = "" ;
   this.A3UserCustomizationsValue = "" ;
   this.Z3UserCustomizationsValue = "" ;
   this.O3UserCustomizationsValue = "" ;
   this.A1UserCustomizationsId = 0 ;
   this.A2UserCustomizationsKey = "" ;
   this.A3UserCustomizationsValue = "" ;
   this.Events = {"e11011_client": ["ENTER", true] ,"e12011_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["VALID_USERCUSTOMIZATIONSID"] = [[],[]];
   this.EvtParms["VALID_USERCUSTOMIZATIONSKEY"] = [[{av:'A1UserCustomizationsId',fld:'USERCUSTOMIZATIONSID',pic:'ZZZZZ9'},{av:'A2UserCustomizationsKey',fld:'USERCUSTOMIZATIONSKEY',pic:''},{av:'Gx_mode',fld:'vMODE',pic:'@!'}],[{av:'A3UserCustomizationsValue',fld:'USERCUSTOMIZATIONSVALUE',pic:''},{av:'Gx_mode',fld:'vMODE',pic:'@!'},{av:'Z1UserCustomizationsId'},{av:'Z2UserCustomizationsKey'},{av:'Z3UserCustomizationsValue'},{ctrl:'BTN_DELETE',prop:'Enabled'},{ctrl:'BTN_ENTER',prop:'Enabled'}]];
   this.EnterCtrl = ["BTN_ENTER"];
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(wwpbaseobjects.usercustomizations);});
