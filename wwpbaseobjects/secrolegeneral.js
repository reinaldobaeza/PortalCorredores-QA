/*!   GeneXus C# 16_0_10-142546 on 4/19/2021 23:59:49.50
*/
gx.evt.autoSkip = false;
gx.define('wwpbaseobjects.secrolegeneral', true, function (CmpContext) {
   this.ServerClass =  "wwpbaseobjects.secrolegeneral" ;
   this.PackageName =  "GeneXus.Programs" ;
   this.setObjectType("web");
   this.setCmpContext(CmpContext);
   this.ReadonlyForm = true;
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.autoRefresh = true;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
   };
   this.Valid_Secroleid=function()
   {
      return this.validCliEvt("Valid_Secroleid", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("SECROLEID");
         this.AnyError  = 0;

         this.refreshOutputs([{av:'A162SecRoleAsociaCorredor',fld:'SECROLEASOCIACORREDOR',pic:''}]);
      }
      catch(e){}
      try {
          if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
      });
   }
   this.e11341_client=function()
   {
      this.clearMessages();
      this.call("wwpbaseobjects.secrole.aspx", ["UPD", this.A139SecRoleId]);
      this.refreshOutputs([{av:'A162SecRoleAsociaCorredor',fld:'SECROLEASOCIACORREDOR',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.e12341_client=function()
   {
      this.clearMessages();
      this.call("wwpbaseobjects.secrole.aspx", ["DLT", this.A139SecRoleId]);
      this.refreshOutputs([{av:'A162SecRoleAsociaCorredor',fld:'SECROLEASOCIACORREDOR',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.e13341_client=function()
   {
      this.clearMessages();
      this.call("wwpbaseobjects.secrolefunroleassociationww.aspx", [this.A139SecRoleId]);
      this.refreshOutputs([{av:'A162SecRoleAsociaCorredor',fld:'SECROLEASOCIACORREDOR',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.e16342_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e17342_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38];
   this.GXLastCtrlId =38;
   GXValidFnc[2]={ id: 2, fld:"",grid:0};
   GXValidFnc[3]={ id: 3, fld:"LAYOUTMAINTABLE",grid:0};
   GXValidFnc[4]={ id: 4, fld:"",grid:0};
   GXValidFnc[5]={ id: 5, fld:"",grid:0};
   GXValidFnc[6]={ id: 6, fld:"TABLE",grid:0};
   GXValidFnc[7]={ id: 7, fld:"",grid:0};
   GXValidFnc[8]={ id: 8, fld:"",grid:0};
   GXValidFnc[9]={ id: 9, fld:"TRANSACTIONDETAIL_TABLEATTRIBUTES",grid:0};
   GXValidFnc[10]={ id: 10, fld:"",grid:0};
   GXValidFnc[11]={ id: 11, fld:"",grid:0};
   GXValidFnc[12]={ id: 12, fld:"",grid:0};
   GXValidFnc[13]={ id: 13, fld:"",grid:0};
   GXValidFnc[14]={ id:14 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Secroleid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECROLEID",gxz:"Z139SecRoleId",gxold:"O139SecRoleId",gxvar:"A139SecRoleId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A139SecRoleId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z139SecRoleId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SECROLEID",gx.O.A139SecRoleId,0)},c2v:function(){if(this.val()!==undefined)gx.O.A139SecRoleId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SECROLEID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={ id: 15, fld:"",grid:0};
   GXValidFnc[16]={ id: 16, fld:"",grid:0};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"",grid:0};
   GXValidFnc[19]={ id:19 ,lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECROLENAME",gxz:"Z148SecRoleName",gxold:"O148SecRoleName",gxvar:"A148SecRoleName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A148SecRoleName=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z148SecRoleName=Value},v2c:function(){gx.fn.setControlValue("SECROLENAME",gx.O.A148SecRoleName,0)},c2v:function(){if(this.val()!==undefined)gx.O.A148SecRoleName=this.val()},val:function(){return gx.fn.getControlValue("SECROLENAME")},nac:gx.falseFn};
   GXValidFnc[20]={ id: 20, fld:"",grid:0};
   GXValidFnc[21]={ id: 21, fld:"",grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"",grid:0};
   GXValidFnc[24]={ id:24 ,lvl:0,type:"svchar",len:120,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECROLEDESCRIPTION",gxz:"Z147SecRoleDescription",gxold:"O147SecRoleDescription",gxvar:"A147SecRoleDescription",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A147SecRoleDescription=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z147SecRoleDescription=Value},v2c:function(){gx.fn.setControlValue("SECROLEDESCRIPTION",gx.O.A147SecRoleDescription,0)},c2v:function(){if(this.val()!==undefined)gx.O.A147SecRoleDescription=this.val()},val:function(){return gx.fn.getControlValue("SECROLEDESCRIPTION")},nac:gx.falseFn};
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id:29 ,lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECROLEASOCIACORREDOR",gxz:"Z162SecRoleAsociaCorredor",gxold:"O162SecRoleAsociaCorredor",gxvar:"A162SecRoleAsociaCorredor",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.A162SecRoleAsociaCorredor=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z162SecRoleAsociaCorredor=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("SECROLEASOCIACORREDOR",gx.O.A162SecRoleAsociaCorredor,true)},c2v:function(){if(this.val()!==undefined)gx.O.A162SecRoleAsociaCorredor=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("SECROLEASOCIACORREDOR")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id: 34, fld:"BTNUPDATE",grid:0,evt:"e11341_client"};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"BTNDELETE",grid:0,evt:"e12341_client"};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id: 38, fld:"BTNUAASSOCIATEFUNCTIONALITIES",grid:0,evt:"e13341_client"};
   this.A139SecRoleId = 0 ;
   this.Z139SecRoleId = 0 ;
   this.O139SecRoleId = 0 ;
   this.A148SecRoleName = "" ;
   this.Z148SecRoleName = "" ;
   this.O148SecRoleName = "" ;
   this.A147SecRoleDescription = "" ;
   this.Z147SecRoleDescription = "" ;
   this.O147SecRoleDescription = "" ;
   this.A162SecRoleAsociaCorredor = false ;
   this.Z162SecRoleAsociaCorredor = false ;
   this.O162SecRoleAsociaCorredor = false ;
   this.A139SecRoleId = 0 ;
   this.A148SecRoleName = "" ;
   this.A147SecRoleDescription = "" ;
   this.A162SecRoleAsociaCorredor = false ;
   this.Events = {"e16342_client": ["ENTER", true] ,"e17342_client": ["CANCEL", true] ,"e11341_client": ["'DOUPDATE'", false] ,"e12341_client": ["'DODELETE'", false] ,"e13341_client": ["'DOUAASSOCIATEFUNCTIONALITIES'", false]};
   this.EvtParms["REFRESH"] = [[{av:'A139SecRoleId',fld:'SECROLEID',pic:'ZZZ9'},{av:'A162SecRoleAsociaCorredor',fld:'SECROLEASOCIACORREDOR',pic:''}],[{av:'A162SecRoleAsociaCorredor',fld:'SECROLEASOCIACORREDOR',pic:''}]];
   this.EvtParms["START"] = [[{av:'AV19Pgmname',fld:'vPGMNAME',pic:''},{av:'A162SecRoleAsociaCorredor',fld:'SECROLEASOCIACORREDOR',pic:''}],[{av:'A162SecRoleAsociaCorredor',fld:'SECROLEASOCIACORREDOR',pic:''}]];
   this.EvtParms["LOAD"] = [[{av:'A162SecRoleAsociaCorredor',fld:'SECROLEASOCIACORREDOR',pic:''}],[{ctrl:'BTNUPDATE',prop:'Visible'},{ctrl:'BTNDELETE',prop:'Visible'},{ctrl:'BTNUAASSOCIATEFUNCTIONALITIES',prop:'Visible'},{av:'A162SecRoleAsociaCorredor',fld:'SECROLEASOCIACORREDOR',pic:''}]];
   this.EvtParms["'DOUPDATE'"] = [[{av:'A139SecRoleId',fld:'SECROLEID',pic:'ZZZ9'},{av:'A162SecRoleAsociaCorredor',fld:'SECROLEASOCIACORREDOR',pic:''}],[{av:'A162SecRoleAsociaCorredor',fld:'SECROLEASOCIACORREDOR',pic:''}]];
   this.EvtParms["'DODELETE'"] = [[{av:'A139SecRoleId',fld:'SECROLEID',pic:'ZZZ9'},{av:'A162SecRoleAsociaCorredor',fld:'SECROLEASOCIACORREDOR',pic:''}],[{av:'A162SecRoleAsociaCorredor',fld:'SECROLEASOCIACORREDOR',pic:''}]];
   this.EvtParms["'DOUAASSOCIATEFUNCTIONALITIES'"] = [[{av:'A139SecRoleId',fld:'SECROLEID',pic:'ZZZ9'},{av:'A162SecRoleAsociaCorredor',fld:'SECROLEASOCIACORREDOR',pic:''}],[{av:'A162SecRoleAsociaCorredor',fld:'SECROLEASOCIACORREDOR',pic:''}]];
   this.EvtParms["VALID_SECROLEID"] = [[{av:'A162SecRoleAsociaCorredor',fld:'SECROLEASOCIACORREDOR',pic:''}],[{av:'A162SecRoleAsociaCorredor',fld:'SECROLEASOCIACORREDOR',pic:''}]];
   this.Initialize( );
});
