/*!   GeneXus C# 16_0_10-142546 on 4/19/2021 23:59:44.60
*/
gx.evt.autoSkip = false;
gx.define('wwpbaseobjects.secfunctionalitygeneral', true, function (CmpContext) {
   this.ServerClass =  "wwpbaseobjects.secfunctionalitygeneral" ;
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
   this.Valid_Secfunctionalityid=function()
   {
      return this.validCliEvt("Valid_Secfunctionalityid", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("SECFUNCTIONALITYID");
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
   this.Valid_Secparentfunctionalityid=function()
   {
      return this.validCliEvt("Valid_Secparentfunctionalityid", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("SECPARENTFUNCTIONALITYID");
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
   this.e11301_client=function()
   {
      this.clearMessages();
      this.call("wwpbaseobjects.secfunctionality.aspx", ["UPD", this.A136SecFunctionalityId]);
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.e12301_client=function()
   {
      this.clearMessages();
      this.call("wwpbaseobjects.secfunctionality.aspx", ["DLT", this.A136SecFunctionalityId]);
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.e15302_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e16302_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46];
   this.GXLastCtrlId =46;
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
   GXValidFnc[14]={ id:14 ,lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Secfunctionalityid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECFUNCTIONALITYID",gxz:"Z136SecFunctionalityId",gxold:"O136SecFunctionalityId",gxvar:"A136SecFunctionalityId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A136SecFunctionalityId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z136SecFunctionalityId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SECFUNCTIONALITYID",gx.O.A136SecFunctionalityId,0)},c2v:function(){if(this.val()!==undefined)gx.O.A136SecFunctionalityId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SECFUNCTIONALITYID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={ id: 15, fld:"",grid:0};
   GXValidFnc[16]={ id: 16, fld:"",grid:0};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"",grid:0};
   GXValidFnc[19]={ id:19 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECFUNCTIONALITYKEY",gxz:"Z138SecFunctionalityKey",gxold:"O138SecFunctionalityKey",gxvar:"A138SecFunctionalityKey",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A138SecFunctionalityKey=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z138SecFunctionalityKey=Value},v2c:function(){gx.fn.setControlValue("SECFUNCTIONALITYKEY",gx.O.A138SecFunctionalityKey,0)},c2v:function(){if(this.val()!==undefined)gx.O.A138SecFunctionalityKey=this.val()},val:function(){return gx.fn.getControlValue("SECFUNCTIONALITYKEY")},nac:gx.falseFn};
   GXValidFnc[20]={ id: 20, fld:"",grid:0};
   GXValidFnc[21]={ id: 21, fld:"",grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"",grid:0};
   GXValidFnc[24]={ id:24 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECFUNCTIONALITYDESCRIPTION",gxz:"Z143SecFunctionalityDescription",gxold:"O143SecFunctionalityDescription",gxvar:"A143SecFunctionalityDescription",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A143SecFunctionalityDescription=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z143SecFunctionalityDescription=Value},v2c:function(){gx.fn.setControlValue("SECFUNCTIONALITYDESCRIPTION",gx.O.A143SecFunctionalityDescription,0)},c2v:function(){if(this.val()!==undefined)gx.O.A143SecFunctionalityDescription=this.val()},val:function(){return gx.fn.getControlValue("SECFUNCTIONALITYDESCRIPTION")},nac:gx.falseFn};
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id:29 ,lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECFUNCTIONALITYTYPE",gxz:"Z144SecFunctionalityType",gxold:"O144SecFunctionalityType",gxvar:"A144SecFunctionalityType",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.A144SecFunctionalityType=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z144SecFunctionalityType=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("SECFUNCTIONALITYTYPE",gx.O.A144SecFunctionalityType);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A144SecFunctionalityType=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SECFUNCTIONALITYTYPE",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 29 , function() {
   });
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id:34 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECPARENTFUNCTIONALITYDESCRIPTION",gxz:"Z146SecParentFunctionalityDescription",gxold:"O146SecParentFunctionalityDescription",gxvar:"A146SecParentFunctionalityDescription",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A146SecParentFunctionalityDescription=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z146SecParentFunctionalityDescription=Value},v2c:function(){gx.fn.setControlValue("SECPARENTFUNCTIONALITYDESCRIPTION",gx.O.A146SecParentFunctionalityDescription,0)},c2v:function(){if(this.val()!==undefined)gx.O.A146SecParentFunctionalityDescription=this.val()},val:function(){return gx.fn.getControlValue("SECPARENTFUNCTIONALITYDESCRIPTION")},nac:gx.falseFn};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id: 39, fld:"BTNUPDATE",grid:0,evt:"e11301_client"};
   GXValidFnc[40]={ id: 40, fld:"",grid:0};
   GXValidFnc[41]={ id: 41, fld:"BTNDELETE",grid:0,evt:"e12301_client"};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id: 44, fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};
   GXValidFnc[45]={ id:45 ,lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Secparentfunctionalityid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECPARENTFUNCTIONALITYID",gxz:"Z137SecParentFunctionalityId",gxold:"O137SecParentFunctionalityId",gxvar:"A137SecParentFunctionalityId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A137SecParentFunctionalityId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z137SecParentFunctionalityId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SECPARENTFUNCTIONALITYID",gx.O.A137SecParentFunctionalityId,0)},c2v:function(){if(this.val()!==undefined)gx.O.A137SecParentFunctionalityId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SECPARENTFUNCTIONALITYID",'.')},nac:gx.falseFn};
   GXValidFnc[46]={ id:46 ,lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECFUNCTIONALITYACTIVE",gxz:"Z142SecFunctionalityActive",gxold:"O142SecFunctionalityActive",gxvar:"A142SecFunctionalityActive",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A142SecFunctionalityActive=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z142SecFunctionalityActive=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setControlValue("SECFUNCTIONALITYACTIVE",gx.O.A142SecFunctionalityActive,0)},c2v:function(){if(this.val()!==undefined)gx.O.A142SecFunctionalityActive=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("SECFUNCTIONALITYACTIVE")},nac:gx.falseFn};
   this.A136SecFunctionalityId = 0 ;
   this.Z136SecFunctionalityId = 0 ;
   this.O136SecFunctionalityId = 0 ;
   this.A138SecFunctionalityKey = "" ;
   this.Z138SecFunctionalityKey = "" ;
   this.O138SecFunctionalityKey = "" ;
   this.A143SecFunctionalityDescription = "" ;
   this.Z143SecFunctionalityDescription = "" ;
   this.O143SecFunctionalityDescription = "" ;
   this.A144SecFunctionalityType = 0 ;
   this.Z144SecFunctionalityType = 0 ;
   this.O144SecFunctionalityType = 0 ;
   this.A146SecParentFunctionalityDescription = "" ;
   this.Z146SecParentFunctionalityDescription = "" ;
   this.O146SecParentFunctionalityDescription = "" ;
   this.A137SecParentFunctionalityId = 0 ;
   this.Z137SecParentFunctionalityId = 0 ;
   this.O137SecParentFunctionalityId = 0 ;
   this.A142SecFunctionalityActive = false ;
   this.Z142SecFunctionalityActive = false ;
   this.O142SecFunctionalityActive = false ;
   this.A136SecFunctionalityId = 0 ;
   this.A138SecFunctionalityKey = "" ;
   this.A143SecFunctionalityDescription = "" ;
   this.A144SecFunctionalityType = 0 ;
   this.A146SecParentFunctionalityDescription = "" ;
   this.A137SecParentFunctionalityId = 0 ;
   this.A142SecFunctionalityActive = false ;
   this.Events = {"e15302_client": ["ENTER", true] ,"e16302_client": ["CANCEL", true] ,"e11301_client": ["'DOUPDATE'", false] ,"e12301_client": ["'DODELETE'", false]};
   this.EvtParms["REFRESH"] = [[{av:'A136SecFunctionalityId',fld:'SECFUNCTIONALITYID',pic:'ZZZZZZZZZ9'}],[]];
   this.EvtParms["START"] = [[{av:'AV19Pgmname',fld:'vPGMNAME',pic:''}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'gx.fn.getCtrlProperty("SECPARENTFUNCTIONALITYID","Visible")',ctrl:'SECPARENTFUNCTIONALITYID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECFUNCTIONALITYACTIVE","Visible")',ctrl:'SECFUNCTIONALITYACTIVE',prop:'Visible'},{ctrl:'BTNUPDATE',prop:'Visible'},{ctrl:'BTNDELETE',prop:'Visible'}]];
   this.EvtParms["'DOUPDATE'"] = [[{av:'A136SecFunctionalityId',fld:'SECFUNCTIONALITYID',pic:'ZZZZZZZZZ9'}],[]];
   this.EvtParms["'DODELETE'"] = [[{av:'A136SecFunctionalityId',fld:'SECFUNCTIONALITYID',pic:'ZZZZZZZZZ9'}],[]];
   this.EvtParms["VALID_SECFUNCTIONALITYID"] = [[],[]];
   this.EvtParms["VALID_SECPARENTFUNCTIONALITYID"] = [[],[]];
   this.Initialize( );
});
