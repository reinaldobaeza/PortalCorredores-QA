/*!   GeneXus C# 16_0_10-142546 on 4/20/2021 0:0:8.98
*/
gx.evt.autoSkip = false;
gx.define('wwpbaseobjects.secrolefunroleassociationww', false, function () {
   this.ServerClass =  "wwpbaseobjects.secrolefunroleassociationww" ;
   this.PackageName =  "GeneXus.Programs" ;
   this.setObjectType("web");
   this.anyGridBaseTable = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.autoRefresh = true;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
      this.AV44DynamicFiltersEnabled2=gx.fn.getControlValue("vDYNAMICFILTERSENABLED2") ;
      this.AV49DynamicFiltersEnabled3=gx.fn.getControlValue("vDYNAMICFILTERSENABLED3") ;
      this.AV13SecFunctionalityIdRemovedXml=gx.fn.getControlValue("vSECFUNCTIONALITYIDREMOVEDXML") ;
      this.AV12SecFunctionalityIdAddedXml=gx.fn.getControlValue("vSECFUNCTIONALITYIDADDEDXML") ;
      this.AV38OrderedBy=gx.fn.getIntegerValue("vORDEREDBY",'.') ;
      this.AV39OrderedDsc=gx.fn.getControlValue("vORDEREDDSC") ;
      this.AV9SecRoleId=gx.fn.getIntegerValue("vSECROLEID",'.') ;
      this.A139SecRoleId=gx.fn.getIntegerValue("SECROLEID",'.') ;
      this.AV21i=gx.fn.getIntegerValue("vI",'.') ;
      this.AV11SecFunctionalityIdRemoved=gx.fn.getControlValue("vSECFUNCTIONALITYIDREMOVED") ;
      this.AV15SecFunctionalityIdToFind=gx.fn.getIntegerValue("vSECFUNCTIONALITYIDTOFIND",'.') ;
      this.AV10SecFunctionalityIdAdded=gx.fn.getControlValue("vSECFUNCTIONALITYIDADDED") ;
      this.AV34SecRoleIdParm=gx.fn.getIntegerValue("vSECROLEIDPARM",'.') ;
      this.AV16SecFunctionalityRole=gx.fn.getControlValue("vSECFUNCTIONALITYROLE") ;
      this.AV35GridState=gx.fn.getControlValue("vGRIDSTATE") ;
      this.AV55DynamicFiltersIgnoreFirst=gx.fn.getControlValue("vDYNAMICFILTERSIGNOREFIRST") ;
      this.AV54DynamicFiltersRemoving=gx.fn.getControlValue("vDYNAMICFILTERSREMOVING") ;
      this.AV33SecFunctionalityId_Selected=gx.fn.getIntegerValue("vSECFUNCTIONALITYID_SELECTED",'.') ;
      this.AV44DynamicFiltersEnabled2=gx.fn.getControlValue("vDYNAMICFILTERSENABLED2") ;
      this.AV49DynamicFiltersEnabled3=gx.fn.getControlValue("vDYNAMICFILTERSENABLED3") ;
      this.AV13SecFunctionalityIdRemovedXml=gx.fn.getControlValue("vSECFUNCTIONALITYIDREMOVEDXML") ;
      this.AV12SecFunctionalityIdAddedXml=gx.fn.getControlValue("vSECFUNCTIONALITYIDADDEDXML") ;
      this.AV9SecRoleId=gx.fn.getIntegerValue("vSECROLEID",'.') ;
      this.A139SecRoleId=gx.fn.getIntegerValue("SECROLEID",'.') ;
      this.AV21i=gx.fn.getIntegerValue("vI",'.') ;
      this.AV11SecFunctionalityIdRemoved=gx.fn.getControlValue("vSECFUNCTIONALITYIDREMOVED") ;
      this.AV15SecFunctionalityIdToFind=gx.fn.getIntegerValue("vSECFUNCTIONALITYIDTOFIND",'.') ;
      this.AV10SecFunctionalityIdAdded=gx.fn.getControlValue("vSECFUNCTIONALITYIDADDED") ;
      this.AV34SecRoleIdParm=gx.fn.getIntegerValue("vSECROLEIDPARM",'.') ;
      this.AV9SecRoleId=gx.fn.getIntegerValue("vSECROLEID",'.') ;
      this.AV33SecFunctionalityId_Selected=gx.fn.getIntegerValue("vSECFUNCTIONALITYID_SELECTED",'.') ;
   };
   this.Validv_Secfunctionalitytype=function()
   {
      return this.validCliEvt("Validv_Secfunctionalitytype", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("vSECFUNCTIONALITYTYPE");
         this.AnyError  = 0;
         if ( ! ( ( this.AV27SecFunctionalityType == 1 ) || ( this.AV27SecFunctionalityType == 2 ) || ( this.AV27SecFunctionalityType == 3 ) || ( this.AV27SecFunctionalityType == 4 ) || ( this.AV27SecFunctionalityType == 5 ) || ((0==this.AV27SecFunctionalityType)) ) )
         {
            try {
               gxballoon.setError("Campo Sec Functionality Type fuera de rango");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
          if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
      });
   }
   this.Valid_Secfunctionalityid=function()
   {
      var currentRow = gx.fn.currentGridRowImpl(124);
      return this.validCliEvt("Valid_Secfunctionalityid", 124, function () {
      try {
         if(  gx.fn.currentGridRowImpl(124) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SECFUNCTIONALITYID", gx.fn.currentGridRowImpl(124));
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
      var currentRow = gx.fn.currentGridRowImpl(124);
      return this.validCliEvt("Valid_Secparentfunctionalityid", 124, function () {
      try {
         if(  gx.fn.currentGridRowImpl(124) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SECPARENTFUNCTIONALITYID", gx.fn.currentGridRowImpl(124));
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
   this.s112_client=function()
   {
      gx.fn.setCtrlProperty("vSECFUNCTIONALITYDESCRIPTION1","Visible", false );
      gx.fn.setCtrlProperty("vSECPARENTFUNCTIONALITYDESCRIPTION1","Visible", false );
      gx.fn.setCtrlProperty("vSECFUNCTIONALITYKEY1","Visible", false );
      gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR1","Visible", false );
      if ( this.AV40DynamicFiltersSelector1 == "SECFUNCTIONALITYDESCRIPTION" )
      {
         gx.fn.setCtrlProperty("vSECFUNCTIONALITYDESCRIPTION1","Visible", true );
         gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR1","Visible", true );
      }
      else if ( this.AV40DynamicFiltersSelector1 == "SECPARENTFUNCTIONALITYDESCRIPTION" )
      {
         gx.fn.setCtrlProperty("vSECPARENTFUNCTIONALITYDESCRIPTION1","Visible", true );
         gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR1","Visible", true );
      }
      else if ( this.AV40DynamicFiltersSelector1 == "SECFUNCTIONALITYKEY" )
      {
         gx.fn.setCtrlProperty("vSECFUNCTIONALITYKEY1","Visible", true );
         gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR1","Visible", true );
      }
   };
   this.s122_client=function()
   {
      gx.fn.setCtrlProperty("vSECFUNCTIONALITYDESCRIPTION2","Visible", false );
      gx.fn.setCtrlProperty("vSECPARENTFUNCTIONALITYDESCRIPTION2","Visible", false );
      gx.fn.setCtrlProperty("vSECFUNCTIONALITYKEY2","Visible", false );
      gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR2","Visible", false );
      if ( this.AV45DynamicFiltersSelector2 == "SECFUNCTIONALITYDESCRIPTION" )
      {
         gx.fn.setCtrlProperty("vSECFUNCTIONALITYDESCRIPTION2","Visible", true );
         gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR2","Visible", true );
      }
      else if ( this.AV45DynamicFiltersSelector2 == "SECPARENTFUNCTIONALITYDESCRIPTION" )
      {
         gx.fn.setCtrlProperty("vSECPARENTFUNCTIONALITYDESCRIPTION2","Visible", true );
         gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR2","Visible", true );
      }
      else if ( this.AV45DynamicFiltersSelector2 == "SECFUNCTIONALITYKEY" )
      {
         gx.fn.setCtrlProperty("vSECFUNCTIONALITYKEY2","Visible", true );
         gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR2","Visible", true );
      }
   };
   this.s132_client=function()
   {
      gx.fn.setCtrlProperty("vSECFUNCTIONALITYDESCRIPTION3","Visible", false );
      gx.fn.setCtrlProperty("vSECPARENTFUNCTIONALITYDESCRIPTION3","Visible", false );
      gx.fn.setCtrlProperty("vSECFUNCTIONALITYKEY3","Visible", false );
      gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR3","Visible", false );
      if ( this.AV50DynamicFiltersSelector3 == "SECFUNCTIONALITYDESCRIPTION" )
      {
         gx.fn.setCtrlProperty("vSECFUNCTIONALITYDESCRIPTION3","Visible", true );
         gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR3","Visible", true );
      }
      else if ( this.AV50DynamicFiltersSelector3 == "SECPARENTFUNCTIONALITYDESCRIPTION" )
      {
         gx.fn.setCtrlProperty("vSECPARENTFUNCTIONALITYDESCRIPTION3","Visible", true );
         gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR3","Visible", true );
      }
      else if ( this.AV50DynamicFiltersSelector3 == "SECFUNCTIONALITYKEY" )
      {
         gx.fn.setCtrlProperty("vSECFUNCTIONALITYKEY3","Visible", true );
         gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR3","Visible", true );
      }
   };
   this.s152_client=function()
   {
      this.DDO_GRIDContainer.SortedStatus =  gx.text.trim( gx.num.str( this.AV38OrderedBy, 4, 0))+":"+(this.AV39OrderedDsc ? "DSC" : "ASC")  ;
   };
   this.s172_client=function()
   {
      this.AV21i = gx.num.trunc( 1 ,0) ;
      this.AV92GXV4 = gx.num.trunc( 1 ,0) ;
      while ( this.AV92GXV4 <= this.AV11SecFunctionalityIdRemoved.length )
      {
         this.AV14SecFunctionalityId = gx.num.trunc( this.AV11SecFunctionalityIdRemoved[this.AV92GXV4 - 1] ,0) ;
         if ( this.AV14SecFunctionalityId == this.AV15SecFunctionalityIdToFind )
         {
            break;
         }
         this.AV21i = gx.num.trunc( this.AV21i + 1 ,0) ;
         this.AV92GXV4 = gx.num.trunc( this.AV92GXV4 + 1 ,0) ;
      }
      if ( this.AV21i > this.AV11SecFunctionalityIdRemoved.length )
      {
         this.AV21i = gx.num.trunc( 0 ,0) ;
      }
   };
   this.s182_client=function()
   {
      this.AV21i = gx.num.trunc( 1 ,0) ;
      this.AV91GXV3 = gx.num.trunc( 1 ,0) ;
      while ( this.AV91GXV3 <= this.AV10SecFunctionalityIdAdded.length )
      {
         this.AV14SecFunctionalityId = gx.num.trunc( this.AV10SecFunctionalityIdAdded[this.AV91GXV3 - 1] ,0) ;
         if ( this.AV14SecFunctionalityId == this.AV15SecFunctionalityIdToFind )
         {
            break;
         }
         this.AV21i = gx.num.trunc( this.AV21i + 1 ,0) ;
         this.AV91GXV3 = gx.num.trunc( this.AV91GXV3 + 1 ,0) ;
      }
      if ( this.AV21i > this.AV10SecFunctionalityIdAdded.length )
      {
         this.AV21i = gx.num.trunc( 0 ,0) ;
      }
   };
   this.s202_client=function()
   {
      if ( ! this.AV55DynamicFiltersIgnoreFirst )
      {
         this.AV37GridStateDynamicFilter =  {Selected:"",Value:"",Operator:0,ValueTo:""}  ;
         this.AV37GridStateDynamicFilter.Selected =  this.AV40DynamicFiltersSelector1  ;
         if ( ( this.AV40DynamicFiltersSelector1 == "SECFUNCTIONALITYDESCRIPTION" ) && ! ((''==this.AV42SecFunctionalityDescription1)) )
         {
            this.AV37GridStateDynamicFilter.Value =  this.AV42SecFunctionalityDescription1  ;
            this.AV37GridStateDynamicFilter.Operator = gx.num.trunc( this.AV41DynamicFiltersOperator1 ,0) ;
         }
         else if ( ( this.AV40DynamicFiltersSelector1 == "SECPARENTFUNCTIONALITYDESCRIPTION" ) && ! ((''==this.AV56SecParentFunctionalityDescription1)) )
         {
            this.AV37GridStateDynamicFilter.Value =  this.AV56SecParentFunctionalityDescription1  ;
            this.AV37GridStateDynamicFilter.Operator = gx.num.trunc( this.AV41DynamicFiltersOperator1 ,0) ;
         }
         else if ( ( this.AV40DynamicFiltersSelector1 == "SECFUNCTIONALITYKEY" ) && ! ((''==this.AV43SecFunctionalityKey1)) )
         {
            this.AV37GridStateDynamicFilter.Value =  this.AV43SecFunctionalityKey1  ;
            this.AV37GridStateDynamicFilter.Operator = gx.num.trunc( this.AV41DynamicFiltersOperator1 ,0) ;
         }
         if ( this.AV54DynamicFiltersRemoving || ! ((''==this.AV37GridStateDynamicFilter.Value)) )
         {
            this.AV35GridState.DynamicFilters.push(this.AV37GridStateDynamicFilter) ;
         }
      }
      if ( this.AV44DynamicFiltersEnabled2 )
      {
         this.AV37GridStateDynamicFilter =  {Selected:"",Value:"",Operator:0,ValueTo:""}  ;
         this.AV37GridStateDynamicFilter.Selected =  this.AV45DynamicFiltersSelector2  ;
         if ( ( this.AV45DynamicFiltersSelector2 == "SECFUNCTIONALITYDESCRIPTION" ) && ! ((''==this.AV47SecFunctionalityDescription2)) )
         {
            this.AV37GridStateDynamicFilter.Value =  this.AV47SecFunctionalityDescription2  ;
            this.AV37GridStateDynamicFilter.Operator = gx.num.trunc( this.AV46DynamicFiltersOperator2 ,0) ;
         }
         else if ( ( this.AV45DynamicFiltersSelector2 == "SECPARENTFUNCTIONALITYDESCRIPTION" ) && ! ((''==this.AV57SecParentFunctionalityDescription2)) )
         {
            this.AV37GridStateDynamicFilter.Value =  this.AV57SecParentFunctionalityDescription2  ;
            this.AV37GridStateDynamicFilter.Operator = gx.num.trunc( this.AV46DynamicFiltersOperator2 ,0) ;
         }
         else if ( ( this.AV45DynamicFiltersSelector2 == "SECFUNCTIONALITYKEY" ) && ! ((''==this.AV48SecFunctionalityKey2)) )
         {
            this.AV37GridStateDynamicFilter.Value =  this.AV48SecFunctionalityKey2  ;
            this.AV37GridStateDynamicFilter.Operator = gx.num.trunc( this.AV46DynamicFiltersOperator2 ,0) ;
         }
         if ( this.AV54DynamicFiltersRemoving || ! ((''==this.AV37GridStateDynamicFilter.Value)) )
         {
            this.AV35GridState.DynamicFilters.push(this.AV37GridStateDynamicFilter) ;
         }
      }
      if ( this.AV49DynamicFiltersEnabled3 )
      {
         this.AV37GridStateDynamicFilter =  {Selected:"",Value:"",Operator:0,ValueTo:""}  ;
         this.AV37GridStateDynamicFilter.Selected =  this.AV50DynamicFiltersSelector3  ;
         if ( ( this.AV50DynamicFiltersSelector3 == "SECFUNCTIONALITYDESCRIPTION" ) && ! ((''==this.AV52SecFunctionalityDescription3)) )
         {
            this.AV37GridStateDynamicFilter.Value =  this.AV52SecFunctionalityDescription3  ;
            this.AV37GridStateDynamicFilter.Operator = gx.num.trunc( this.AV51DynamicFiltersOperator3 ,0) ;
         }
         else if ( ( this.AV50DynamicFiltersSelector3 == "SECPARENTFUNCTIONALITYDESCRIPTION" ) && ! ((''==this.AV58SecParentFunctionalityDescription3)) )
         {
            this.AV37GridStateDynamicFilter.Value =  this.AV58SecParentFunctionalityDescription3  ;
            this.AV37GridStateDynamicFilter.Operator = gx.num.trunc( this.AV51DynamicFiltersOperator3 ,0) ;
         }
         else if ( ( this.AV50DynamicFiltersSelector3 == "SECFUNCTIONALITYKEY" ) && ! ((''==this.AV53SecFunctionalityKey3)) )
         {
            this.AV37GridStateDynamicFilter.Value =  this.AV53SecFunctionalityKey3  ;
            this.AV37GridStateDynamicFilter.Operator = gx.num.trunc( this.AV51DynamicFiltersOperator3 ,0) ;
         }
         if ( this.AV54DynamicFiltersRemoving || ! ((''==this.AV37GridStateDynamicFilter.Value)) )
         {
            this.AV35GridState.DynamicFilters.push(this.AV37GridStateDynamicFilter) ;
         }
      }
   };
   this.s212_client=function()
   {
      this.AV44DynamicFiltersEnabled2 =  false  ;
      this.AV45DynamicFiltersSelector2 =  "SECFUNCTIONALITYDESCRIPTION"  ;
      this.AV46DynamicFiltersOperator2 = gx.num.trunc( 0 ,0) ;
      this.AV47SecFunctionalityDescription2 =  ''  ;
      this.s122_client();
      this.AV49DynamicFiltersEnabled3 =  false  ;
      this.AV50DynamicFiltersSelector3 =  "SECFUNCTIONALITYDESCRIPTION"  ;
      this.AV51DynamicFiltersOperator3 = gx.num.trunc( 0 ,0) ;
      this.AV52SecFunctionalityDescription3 =  ''  ;
      this.s132_client();
   };
   this.s222_client=function()
   {
      this.call("wwpbaseobjects.secrolefunroleactionassociationww.aspx", [this.AV9SecRoleId, this.AV33SecFunctionalityId_Selected]);
   };
   this.e282v1_client=function()
   {
      this.clearMessages();
      if ( this.DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer.Result == "Yes" )
      {
         this.s222_client();
      }
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.e112v2_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE", false, null, true, true);
   };
   this.e122v2_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", false, null, true, true);
   };
   this.e132v2_client=function()
   {
      return this.executeServerEvent("DDO_GRID.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e142v2_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152v2_client=function()
   {
      return this.executeServerEvent("'REMOVEDYNAMICFILTERS1'", true, null, false, false);
   };
   this.e162v2_client=function()
   {
      return this.executeServerEvent("'REMOVEDYNAMICFILTERS2'", true, null, false, false);
   };
   this.e172v2_client=function()
   {
      return this.executeServerEvent("'REMOVEDYNAMICFILTERS3'", true, null, false, false);
   };
   this.e262v2_client=function()
   {
      return this.executeServerEvent("'DOUAVIEWCHILDREN'", true, arguments[0], false, false);
   };
   this.e272v2_client=function()
   {
      return this.executeServerEvent("VISASSOCIATED.CLICK", true, arguments[0], false, false);
   };
   this.e182v2_client=function()
   {
      return this.executeServerEvent("'ADDDYNAMICFILTERS1'", true, null, false, false);
   };
   this.e192v2_client=function()
   {
      return this.executeServerEvent("VDYNAMICFILTERSSELECTOR1.CLICK", true, null, false, true);
   };
   this.e202v2_client=function()
   {
      return this.executeServerEvent("'ADDDYNAMICFILTERS2'", true, null, false, false);
   };
   this.e212v2_client=function()
   {
      return this.executeServerEvent("VDYNAMICFILTERSSELECTOR2.CLICK", true, null, false, true);
   };
   this.e222v2_client=function()
   {
      return this.executeServerEvent("VDYNAMICFILTERSSELECTOR3.CLICK", true, null, false, true);
   };
   this.e292v1_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,19,20,21,22,23,26,27,28,30,33,35,36,38,40,43,44,46,47,49,50,52,53,55,58,60,63,65,66,68,70,73,74,76,77,79,80,82,83,85,88,90,93,95,96,98,100,103,104,106,107,109,110,112,113,115,118,119,120,121,122,123,125,126,127,128,129,130,131,132,133,134,135,136,138,139,140,141,142,143,144,145,146,147,148,150];
   this.GXLastCtrlId =150;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",124,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"wwpbaseobjects.secrolefunroleassociationww",[],false,1,false,true,0,false,false,false,"",0,"px",0,"px","Nueva fila",true,false,false,null,null,false,"",false,[1,1,1,1],false,0,true,false);
   var GridContainer = this.GridContainer;
   GridContainer.addCheckBox("Isassociated",125,"vISASSOCIATED","","","IsAssociated","boolean","true","false","e272v2_client",true,false,0,"px","");
   GridContainer.addCheckBox("Isassociatedold",126,"vISASSOCIATEDOLD","","","IsAssociatedOld","boolean","true","false",null,false,false,0,"px","");
   GridContainer.addBitmap("&Uaviewchildren","vUAVIEWCHILDREN",127,0,"px",17,"px","e262v2_client","","","","WWActionColumn");
   GridContainer.addSingleLineEdit(136,128,"SECFUNCTIONALITYID","Id","","SecFunctionalityId","int",0,"px",10,10,"right",null,[],136,"SecFunctionalityId",false,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(138,129,"SECFUNCTIONALITYKEY","Key","","SecFunctionalityKey","svchar",0,"px",100,80,"left",null,[],138,"SecFunctionalityKey",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(143,130,"SECFUNCTIONALITYDESCRIPTION","Description","","SecFunctionalityDescription","svchar",0,"px",100,80,"left",null,[],143,"SecFunctionalityDescription",true,0,false,false,"Attribute",1,"WWColumn");
   GridContainer.addComboBox(144,131,"SECFUNCTIONALITYTYPE","Type","SecFunctionalityType","int",null,0,true,false,0,"px","WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(137,132,"SECPARENTFUNCTIONALITYID","Parent Functionality Id  ","","SecParentFunctionalityId","int",0,"px",10,10,"right",null,[],137,"SecParentFunctionalityId",false,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(146,133,"SECPARENTFUNCTIONALITYDESCRIPTION","Parent Functionality","","SecParentFunctionalityDescription","svchar",0,"px",100,80,"left",null,[],146,"SecParentFunctionalityDescription",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addCheckBox(142,134,"SECFUNCTIONALITYACTIVE","Is Active?","","SecFunctionalityActive","boolean","true","false",null,false,false,0,"px","WWColumn hidden-xs");
   this.GridContainer.emptyText = "";
   this.setGrid(GridContainer);
   this.GRIDPAGINATIONBARContainer = gx.uc.getNew(this, 137, 21, "DVelop_DVPaginationBar", "GRIDPAGINATIONBARContainer", "Gridpaginationbar", "GRIDPAGINATIONBAR");
   var GRIDPAGINATIONBARContainer = this.GRIDPAGINATIONBARContainer;
   GRIDPAGINATIONBARContainer.setProp("Enabled", "Enabled", true, "boolean");
   GRIDPAGINATIONBARContainer.setProp("Class", "Class", "PaginationBar", "str");
   GRIDPAGINATIONBARContainer.setProp("ShowFirst", "Showfirst", false, "bool");
   GRIDPAGINATIONBARContainer.setProp("ShowPrevious", "Showprevious", true, "bool");
   GRIDPAGINATIONBARContainer.setProp("ShowNext", "Shownext", true, "bool");
   GRIDPAGINATIONBARContainer.setProp("ShowLast", "Showlast", false, "bool");
   GRIDPAGINATIONBARContainer.setProp("PagesToShow", "Pagestoshow", 5, "num");
   GRIDPAGINATIONBARContainer.setProp("PagingButtonsPosition", "Pagingbuttonsposition", "Right", "str");
   GRIDPAGINATIONBARContainer.setProp("PagingCaptionPosition", "Pagingcaptionposition", "Left", "str");
   GRIDPAGINATIONBARContainer.setProp("EmptyGridClass", "Emptygridclass", "PaginationBarEmptyGrid", "str");
   GRIDPAGINATIONBARContainer.setProp("SelectedPage", "Selectedpage", "", "char");
   GRIDPAGINATIONBARContainer.setProp("RowsPerPageSelector", "Rowsperpageselector", true, "bool");
   GRIDPAGINATIONBARContainer.setDynProp("RowsPerPageSelectedValue", "Rowsperpageselectedvalue", 10, "num");
   GRIDPAGINATIONBARContainer.setProp("RowsPerPageOptions", "Rowsperpageoptions", "5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50", "str");
   GRIDPAGINATIONBARContainer.setProp("First", "First", "First", "str");
   GRIDPAGINATIONBARContainer.setProp("Previous", "Previous", "WWP_PagingPreviousCaption", "str");
   GRIDPAGINATIONBARContainer.setProp("Next", "Next", "WWP_PagingNextCaption", "str");
   GRIDPAGINATIONBARContainer.setProp("Last", "Last", "Last", "str");
   GRIDPAGINATIONBARContainer.setProp("Caption", "Caption", "Página <CURRENT_PAGE> de <TOTAL_PAGES>", "str");
   GRIDPAGINATIONBARContainer.setProp("EmptyGridCaption", "Emptygridcaption", "WWP_PagingEmptyGridCaption", "str");
   GRIDPAGINATIONBARContainer.setProp("RowsPerPageCaption", "Rowsperpagecaption", "WWP_PagingRowsPerPage", "str");
   GRIDPAGINATIONBARContainer.addV2CFunction('AV81GridCurrentPage', "vGRIDCURRENTPAGE", 'SetCurrentPage');
   GRIDPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV81GridCurrentPage=UC.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",UC.ParentObject.AV81GridCurrentPage); });
   GRIDPAGINATIONBARContainer.addV2CFunction('AV82GridPageCount', "vGRIDPAGECOUNT", 'SetPageCount');
   GRIDPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV82GridPageCount=UC.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",UC.ParentObject.AV82GridPageCount); });
   GRIDPAGINATIONBARContainer.setProp("RecordCount", "Recordcount", '', "str");
   GRIDPAGINATIONBARContainer.setProp("Page", "Page", '', "str");
   GRIDPAGINATIONBARContainer.setProp("Visible", "Visible", true, "bool");
   GRIDPAGINATIONBARContainer.setProp("Gx Control Type", "Gxcontroltype", '', "int");
   GRIDPAGINATIONBARContainer.setC2ShowFunction(function(UC) { UC.show(); });
   GRIDPAGINATIONBARContainer.addEventHandler("ChangePage", this.e112v2_client);
   GRIDPAGINATIONBARContainer.addEventHandler("ChangeRowsPerPage", this.e122v2_client);
   this.setUserControl(GRIDPAGINATIONBARContainer);
   this.DDO_GRIDContainer = gx.uc.getNew(this, 149, 21, "DDOGridTitleSettingsM", "DDO_GRIDContainer", "Ddo_grid", "DDO_GRID");
   var DDO_GRIDContainer = this.DDO_GRIDContainer;
   DDO_GRIDContainer.setProp("Class", "Class", "", "char");
   DDO_GRIDContainer.setProp("Enabled", "Enabled", true, "boolean");
   DDO_GRIDContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_GRIDContainer.setProp("Icon", "Icon", "", "str");
   DDO_GRIDContainer.setProp("Caption", "Caption", "", "str");
   DDO_GRIDContainer.setProp("Tooltip", "Tooltip", "", "str");
   DDO_GRIDContainer.setProp("Cls", "Cls", "", "str");
   DDO_GRIDContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_GRIDContainer.setProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_GRIDContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_GRIDContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_GRIDContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_GRIDContainer.setProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_GRIDContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_GRIDContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_GRIDContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_GRIDContainer.setProp("SelectedColumn", "Selectedcolumn", "", "char");
   DDO_GRIDContainer.setProp("SelectedColumnFixedFilter", "Selectedcolumnfixedfilter", "", "char");
   DDO_GRIDContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_GRIDContainer.setProp("TitleControlAlign", "Titlecontrolalign", "", "str");
   DDO_GRIDContainer.setProp("Visible", "Visible", "", "str");
   DDO_GRIDContainer.setDynProp("GridInternalName", "Gridinternalname", "", "str");
   DDO_GRIDContainer.setProp("ColumnIds", "Columnids", "4:SecFunctionalityKey|5:SecFunctionalityDescription|6:SecFunctionalityType|8:SecParentFunctionalityDescription", "str");
   DDO_GRIDContainer.setProp("ColumnsSortValues", "Columnssortvalues", "2|1|3|4", "str");
   DDO_GRIDContainer.setProp("IncludeSortASC", "Includesortasc", "T", "str");
   DDO_GRIDContainer.setProp("IncludeSortDSC", "Includesortdsc", "", "str");
   DDO_GRIDContainer.setProp("AllowGroup", "Allowgroup", "", "str");
   DDO_GRIDContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_GRIDContainer.setProp("IncludeFilter", "Includefilter", "", "str");
   DDO_GRIDContainer.setProp("FilterType", "Filtertype", "", "str");
   DDO_GRIDContainer.setProp("FilterIsRange", "Filterisrange", "", "str");
   DDO_GRIDContainer.setProp("IncludeDataList", "Includedatalist", "", "str");
   DDO_GRIDContainer.setProp("DataListType", "Datalisttype", "", "str");
   DDO_GRIDContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", "", "str");
   DDO_GRIDContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "str");
   DDO_GRIDContainer.setProp("DataListProc", "Datalistproc", "", "str");
   DDO_GRIDContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "str");
   DDO_GRIDContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", 0, "num");
   DDO_GRIDContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_GRIDContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_GRIDContainer.setProp("SortASC", "Sortasc", "", "str");
   DDO_GRIDContainer.setProp("SortDSC", "Sortdsc", "", "str");
   DDO_GRIDContainer.setProp("AllowGroupText", "Allowgrouptext", "", "str");
   DDO_GRIDContainer.setProp("LoadingData", "Loadingdata", "", "str");
   DDO_GRIDContainer.setProp("CleanFilter", "Cleanfilter", "", "str");
   DDO_GRIDContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "str");
   DDO_GRIDContainer.setProp("RangeFilterTo", "Rangefilterto", "", "str");
   DDO_GRIDContainer.setProp("NoResultsFound", "Noresultsfound", "", "str");
   DDO_GRIDContainer.setProp("SearchButtonText", "Searchbuttontext", "", "str");
   DDO_GRIDContainer.addV2CFunction('AV74DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_GRIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV74DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV74DDO_TitleSettingsIcons); });
   DDO_GRIDContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_GRIDContainer.addEventHandler("OnOptionClicked", this.e132v2_client);
   this.setUserControl(DDO_GRIDContainer);
   this.DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer = gx.uc.getNew(this, 153, 21, "BootstrapConfirmPanel", "DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer", "Dvelop_confirmpanel_uaviewchildren", "DVELOP_CONFIRMPANEL_UAVIEWCHILDREN");
   var DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer = this.DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer;
   DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer.setProp("Enabled", "Enabled", true, "boolean");
   DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer.setProp("Width", "Width", "100", "str");
   DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer.setProp("Height", "Height", "100", "str");
   DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer.setProp("Class", "Class", "", "str");
   DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer.setProp("Title", "Title", "Confirmation of loss changes", "str");
   DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer.setProp("ConfirmationText", "Confirmationtext", "You will lose the changes made. Are you sure you want to continue?", "str");
   DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer.setProp("YesButtonCaption", "Yesbuttoncaption", "WWP_ConfirmTextYes", "str");
   DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer.setProp("NoButtonCaption", "Nobuttoncaption", "WWP_ConfirmTextNo", "str");
   DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer.setProp("CancelButtonCaption", "Cancelbuttoncaption", "WWP_ConfirmTextCancel", "str");
   DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer.setProp("YesButtonPosition", "Yesbuttonposition", "left", "str");
   DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer.setProp("ConfirmType", "Confirmtype", "1", "str");
   DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer.setProp("Result", "Result", "", "char");
   DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer.setProp("TextType", "Texttype", "1", "str");
   DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer.setProp("Visible", "Visible", true, "bool");
   DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer.addEventHandler("Close", this.e282v1_client);
   this.setUserControl(DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer);
   GXValidFnc[2]={ id: 2, fld:"",grid:0};
   GXValidFnc[3]={ id: 3, fld:"LAYOUTMAINTABLE",grid:0};
   GXValidFnc[4]={ id: 4, fld:"",grid:0};
   GXValidFnc[5]={ id: 5, fld:"",grid:0};
   GXValidFnc[6]={ id: 6, fld:"TABLEMAIN",grid:0};
   GXValidFnc[7]={ id: 7, fld:"",grid:0};
   GXValidFnc[8]={ id: 8, fld:"",grid:0};
   GXValidFnc[10]={ id: 10, fld:"",grid:0};
   GXValidFnc[11]={ id: 11, fld:"",grid:0};
   GXValidFnc[12]={ id: 12, fld:"TABLEHEADER",grid:0};
   GXValidFnc[13]={ id: 13, fld:"",grid:0};
   GXValidFnc[14]={ id: 14, fld:"",grid:0};
   GXValidFnc[15]={ id: 15, fld:"TABLEACTIONS",grid:0};
   GXValidFnc[16]={ id: 16, fld:"",grid:0};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"ASSOCIATIONTITLE", format:0,grid:0};
   GXValidFnc[19]={ id: 19, fld:"",grid:0};
   GXValidFnc[20]={ id: 20, fld:"",grid:0};
   GXValidFnc[21]={ id:21 ,lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSECROLENAME",gxz:"ZV8SecRoleName",gxold:"OV8SecRoleName",gxvar:"AV8SecRoleName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV8SecRoleName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV8SecRoleName=Value},v2c:function(){gx.fn.setControlValue("vSECROLENAME",gx.O.AV8SecRoleName,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV8SecRoleName=this.val()},val:function(){return gx.fn.getControlValue("vSECROLENAME")},nac:gx.falseFn};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"TABLEFILTERS",grid:0};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id:28 ,lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Secfunctionalitytype,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vSECFUNCTIONALITYTYPE",gxz:"ZV27SecFunctionalityType",gxold:"OV27SecFunctionalityType",gxvar:"AV27SecFunctionalityType",ucs:[],op:[28],ip:[28],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV27SecFunctionalityType=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV27SecFunctionalityType=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vSECFUNCTIONALITYTYPE",gx.O.AV27SecFunctionalityType)},c2v:function(){if(this.val()!==undefined)gx.O.AV27SecFunctionalityType=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSECFUNCTIONALITYTYPE",'.')},nac:gx.falseFn};
   GXValidFnc[30]={ id: 30, fld:"TABLEDYNAMICFILTERS",grid:0};
   GXValidFnc[33]={ id: 33, fld:"DYNAMICFILTERSPREFIX1", format:0,grid:0};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id:36 ,lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vDYNAMICFILTERSSELECTOR1",gxz:"ZV40DynamicFiltersSelector1",gxold:"OV40DynamicFiltersSelector1",gxvar:"AV40DynamicFiltersSelector1",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV40DynamicFiltersSelector1=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV40DynamicFiltersSelector1=Value},v2c:function(){gx.fn.setComboBoxValue("vDYNAMICFILTERSSELECTOR1",gx.O.AV40DynamicFiltersSelector1)},c2v:function(){if(this.val()!==undefined)gx.O.AV40DynamicFiltersSelector1=this.val()},val:function(){return gx.fn.getControlValue("vDYNAMICFILTERSSELECTOR1")},nac:gx.falseFn,evt:"e192v2_client"};
   GXValidFnc[38]={ id: 38, fld:"DYNAMICFILTERSMIDDLE1", format:0,grid:0};
   GXValidFnc[40]={ id: 40, fld:"TABLEMERGEDDYNAMICFILTERS1",grid:0};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id:44 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vDYNAMICFILTERSOPERATOR1",gxz:"ZV41DynamicFiltersOperator1",gxold:"OV41DynamicFiltersOperator1",gxvar:"AV41DynamicFiltersOperator1",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV41DynamicFiltersOperator1=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV41DynamicFiltersOperator1=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vDYNAMICFILTERSOPERATOR1",gx.O.AV41DynamicFiltersOperator1)},c2v:function(){if(this.val()!==undefined)gx.O.AV41DynamicFiltersOperator1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDYNAMICFILTERSOPERATOR1",'.')},nac:gx.falseFn};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id:47 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vSECFUNCTIONALITYDESCRIPTION1",gxz:"ZV42SecFunctionalityDescription1",gxold:"OV42SecFunctionalityDescription1",gxvar:"AV42SecFunctionalityDescription1",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV42SecFunctionalityDescription1=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV42SecFunctionalityDescription1=Value},v2c:function(){gx.fn.setControlValue("vSECFUNCTIONALITYDESCRIPTION1",gx.O.AV42SecFunctionalityDescription1,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV42SecFunctionalityDescription1=this.val()},val:function(){return gx.fn.getControlValue("vSECFUNCTIONALITYDESCRIPTION1")},nac:gx.falseFn};
   GXValidFnc[49]={ id: 49, fld:"",grid:0};
   GXValidFnc[50]={ id:50 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vSECPARENTFUNCTIONALITYDESCRIPTION1",gxz:"ZV56SecParentFunctionalityDescription1",gxold:"OV56SecParentFunctionalityDescription1",gxvar:"AV56SecParentFunctionalityDescription1",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV56SecParentFunctionalityDescription1=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV56SecParentFunctionalityDescription1=Value},v2c:function(){gx.fn.setControlValue("vSECPARENTFUNCTIONALITYDESCRIPTION1",gx.O.AV56SecParentFunctionalityDescription1,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV56SecParentFunctionalityDescription1=this.val()},val:function(){return gx.fn.getControlValue("vSECPARENTFUNCTIONALITYDESCRIPTION1")},nac:gx.falseFn};
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[53]={ id:53 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vSECFUNCTIONALITYKEY1",gxz:"ZV43SecFunctionalityKey1",gxold:"OV43SecFunctionalityKey1",gxvar:"AV43SecFunctionalityKey1",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV43SecFunctionalityKey1=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV43SecFunctionalityKey1=Value},v2c:function(){gx.fn.setControlValue("vSECFUNCTIONALITYKEY1",gx.O.AV43SecFunctionalityKey1,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV43SecFunctionalityKey1=this.val()},val:function(){return gx.fn.getControlValue("vSECFUNCTIONALITYKEY1")},nac:gx.falseFn};
   GXValidFnc[55]={ id: 55, fld:"UNNAMEDTABLEDYNAMICFILTERS_1",grid:0};
   GXValidFnc[58]={ id: 58, fld:"ADDDYNAMICFILTERS1",grid:0,evt:"e182v2_client"};
   GXValidFnc[60]={ id: 60, fld:"REMOVEDYNAMICFILTERS1",grid:0,evt:"e152v2_client"};
   GXValidFnc[63]={ id: 63, fld:"DYNAMICFILTERSPREFIX2", format:0,grid:0};
   GXValidFnc[65]={ id: 65, fld:"",grid:0};
   GXValidFnc[66]={ id:66 ,lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vDYNAMICFILTERSSELECTOR2",gxz:"ZV45DynamicFiltersSelector2",gxold:"OV45DynamicFiltersSelector2",gxvar:"AV45DynamicFiltersSelector2",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV45DynamicFiltersSelector2=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV45DynamicFiltersSelector2=Value},v2c:function(){gx.fn.setComboBoxValue("vDYNAMICFILTERSSELECTOR2",gx.O.AV45DynamicFiltersSelector2)},c2v:function(){if(this.val()!==undefined)gx.O.AV45DynamicFiltersSelector2=this.val()},val:function(){return gx.fn.getControlValue("vDYNAMICFILTERSSELECTOR2")},nac:gx.falseFn,evt:"e212v2_client"};
   GXValidFnc[68]={ id: 68, fld:"DYNAMICFILTERSMIDDLE2", format:0,grid:0};
   GXValidFnc[70]={ id: 70, fld:"TABLEMERGEDDYNAMICFILTERS2",grid:0};
   GXValidFnc[73]={ id: 73, fld:"",grid:0};
   GXValidFnc[74]={ id:74 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vDYNAMICFILTERSOPERATOR2",gxz:"ZV46DynamicFiltersOperator2",gxold:"OV46DynamicFiltersOperator2",gxvar:"AV46DynamicFiltersOperator2",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV46DynamicFiltersOperator2=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV46DynamicFiltersOperator2=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vDYNAMICFILTERSOPERATOR2",gx.O.AV46DynamicFiltersOperator2)},c2v:function(){if(this.val()!==undefined)gx.O.AV46DynamicFiltersOperator2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDYNAMICFILTERSOPERATOR2",'.')},nac:gx.falseFn};
   GXValidFnc[76]={ id: 76, fld:"",grid:0};
   GXValidFnc[77]={ id:77 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vSECFUNCTIONALITYDESCRIPTION2",gxz:"ZV47SecFunctionalityDescription2",gxold:"OV47SecFunctionalityDescription2",gxvar:"AV47SecFunctionalityDescription2",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV47SecFunctionalityDescription2=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV47SecFunctionalityDescription2=Value},v2c:function(){gx.fn.setControlValue("vSECFUNCTIONALITYDESCRIPTION2",gx.O.AV47SecFunctionalityDescription2,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV47SecFunctionalityDescription2=this.val()},val:function(){return gx.fn.getControlValue("vSECFUNCTIONALITYDESCRIPTION2")},nac:gx.falseFn};
   GXValidFnc[79]={ id: 79, fld:"",grid:0};
   GXValidFnc[80]={ id:80 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vSECPARENTFUNCTIONALITYDESCRIPTION2",gxz:"ZV57SecParentFunctionalityDescription2",gxold:"OV57SecParentFunctionalityDescription2",gxvar:"AV57SecParentFunctionalityDescription2",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV57SecParentFunctionalityDescription2=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV57SecParentFunctionalityDescription2=Value},v2c:function(){gx.fn.setControlValue("vSECPARENTFUNCTIONALITYDESCRIPTION2",gx.O.AV57SecParentFunctionalityDescription2,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV57SecParentFunctionalityDescription2=this.val()},val:function(){return gx.fn.getControlValue("vSECPARENTFUNCTIONALITYDESCRIPTION2")},nac:gx.falseFn};
   GXValidFnc[82]={ id: 82, fld:"",grid:0};
   GXValidFnc[83]={ id:83 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vSECFUNCTIONALITYKEY2",gxz:"ZV48SecFunctionalityKey2",gxold:"OV48SecFunctionalityKey2",gxvar:"AV48SecFunctionalityKey2",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV48SecFunctionalityKey2=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV48SecFunctionalityKey2=Value},v2c:function(){gx.fn.setControlValue("vSECFUNCTIONALITYKEY2",gx.O.AV48SecFunctionalityKey2,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV48SecFunctionalityKey2=this.val()},val:function(){return gx.fn.getControlValue("vSECFUNCTIONALITYKEY2")},nac:gx.falseFn};
   GXValidFnc[85]={ id: 85, fld:"UNNAMEDTABLEDYNAMICFILTERS_2",grid:0};
   GXValidFnc[88]={ id: 88, fld:"ADDDYNAMICFILTERS2",grid:0,evt:"e202v2_client"};
   GXValidFnc[90]={ id: 90, fld:"REMOVEDYNAMICFILTERS2",grid:0,evt:"e162v2_client"};
   GXValidFnc[93]={ id: 93, fld:"DYNAMICFILTERSPREFIX3", format:0,grid:0};
   GXValidFnc[95]={ id: 95, fld:"",grid:0};
   GXValidFnc[96]={ id:96 ,lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vDYNAMICFILTERSSELECTOR3",gxz:"ZV50DynamicFiltersSelector3",gxold:"OV50DynamicFiltersSelector3",gxvar:"AV50DynamicFiltersSelector3",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV50DynamicFiltersSelector3=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV50DynamicFiltersSelector3=Value},v2c:function(){gx.fn.setComboBoxValue("vDYNAMICFILTERSSELECTOR3",gx.O.AV50DynamicFiltersSelector3)},c2v:function(){if(this.val()!==undefined)gx.O.AV50DynamicFiltersSelector3=this.val()},val:function(){return gx.fn.getControlValue("vDYNAMICFILTERSSELECTOR3")},nac:gx.falseFn,evt:"e222v2_client"};
   GXValidFnc[98]={ id: 98, fld:"DYNAMICFILTERSMIDDLE3", format:0,grid:0};
   GXValidFnc[100]={ id: 100, fld:"TABLEMERGEDDYNAMICFILTERS3",grid:0};
   GXValidFnc[103]={ id: 103, fld:"",grid:0};
   GXValidFnc[104]={ id:104 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vDYNAMICFILTERSOPERATOR3",gxz:"ZV51DynamicFiltersOperator3",gxold:"OV51DynamicFiltersOperator3",gxvar:"AV51DynamicFiltersOperator3",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV51DynamicFiltersOperator3=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV51DynamicFiltersOperator3=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vDYNAMICFILTERSOPERATOR3",gx.O.AV51DynamicFiltersOperator3)},c2v:function(){if(this.val()!==undefined)gx.O.AV51DynamicFiltersOperator3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDYNAMICFILTERSOPERATOR3",'.')},nac:gx.falseFn};
   GXValidFnc[106]={ id: 106, fld:"",grid:0};
   GXValidFnc[107]={ id:107 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vSECFUNCTIONALITYDESCRIPTION3",gxz:"ZV52SecFunctionalityDescription3",gxold:"OV52SecFunctionalityDescription3",gxvar:"AV52SecFunctionalityDescription3",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV52SecFunctionalityDescription3=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV52SecFunctionalityDescription3=Value},v2c:function(){gx.fn.setControlValue("vSECFUNCTIONALITYDESCRIPTION3",gx.O.AV52SecFunctionalityDescription3,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV52SecFunctionalityDescription3=this.val()},val:function(){return gx.fn.getControlValue("vSECFUNCTIONALITYDESCRIPTION3")},nac:gx.falseFn};
   GXValidFnc[109]={ id: 109, fld:"",grid:0};
   GXValidFnc[110]={ id:110 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vSECPARENTFUNCTIONALITYDESCRIPTION3",gxz:"ZV58SecParentFunctionalityDescription3",gxold:"OV58SecParentFunctionalityDescription3",gxvar:"AV58SecParentFunctionalityDescription3",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV58SecParentFunctionalityDescription3=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV58SecParentFunctionalityDescription3=Value},v2c:function(){gx.fn.setControlValue("vSECPARENTFUNCTIONALITYDESCRIPTION3",gx.O.AV58SecParentFunctionalityDescription3,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV58SecParentFunctionalityDescription3=this.val()},val:function(){return gx.fn.getControlValue("vSECPARENTFUNCTIONALITYDESCRIPTION3")},nac:gx.falseFn};
   GXValidFnc[112]={ id: 112, fld:"",grid:0};
   GXValidFnc[113]={ id:113 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vSECFUNCTIONALITYKEY3",gxz:"ZV53SecFunctionalityKey3",gxold:"OV53SecFunctionalityKey3",gxvar:"AV53SecFunctionalityKey3",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV53SecFunctionalityKey3=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV53SecFunctionalityKey3=Value},v2c:function(){gx.fn.setControlValue("vSECFUNCTIONALITYKEY3",gx.O.AV53SecFunctionalityKey3,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV53SecFunctionalityKey3=this.val()},val:function(){return gx.fn.getControlValue("vSECFUNCTIONALITYKEY3")},nac:gx.falseFn};
   GXValidFnc[115]={ id: 115, fld:"UNNAMEDTABLEDYNAMICFILTERS_3",grid:0};
   GXValidFnc[118]={ id: 118, fld:"REMOVEDYNAMICFILTERS3",grid:0,evt:"e172v2_client"};
   GXValidFnc[119]={ id: 119, fld:"",grid:0};
   GXValidFnc[120]={ id: 120, fld:"",grid:0};
   GXValidFnc[121]={ id: 121, fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};
   GXValidFnc[122]={ id: 122, fld:"",grid:0};
   GXValidFnc[123]={ id: 123, fld:"",grid:0};
   GXValidFnc[125]={ id:125 ,lvl:2,type:"boolean",len:4,dec:0,sign:false,ro:0,isacc:0,grid:124,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vISASSOCIATED",gxz:"ZV18IsAssociated",gxold:"OV18IsAssociated",gxvar:"AV18IsAssociated",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV18IsAssociated=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV18IsAssociated=gx.lang.booleanValue(Value)},v2c:function(row){gx.fn.setGridCheckBoxValue("vISASSOCIATED",row || gx.fn.currentGridRowImpl(124),gx.O.AV18IsAssociated,true)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV18IsAssociated=gx.lang.booleanValue(this.val(row))},val:function(row){return gx.fn.getGridControlValue("vISASSOCIATED",row || gx.fn.currentGridRowImpl(124))},nac:gx.falseFn,evt:"e272v2_client",values:['true','false']};
   GXValidFnc[126]={ id:126 ,lvl:2,type:"boolean",len:4,dec:0,sign:false,ro:0,isacc:0,grid:124,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vISASSOCIATEDOLD",gxz:"ZV19IsAssociatedOld",gxold:"OV19IsAssociatedOld",gxvar:"AV19IsAssociatedOld",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV19IsAssociatedOld=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV19IsAssociatedOld=gx.lang.booleanValue(Value)},v2c:function(row){gx.fn.setGridCheckBoxValue("vISASSOCIATEDOLD",row || gx.fn.currentGridRowImpl(124),gx.O.AV19IsAssociatedOld,true)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV19IsAssociatedOld=gx.lang.booleanValue(this.val(row))},val:function(row){return gx.fn.getGridControlValue("vISASSOCIATEDOLD",row || gx.fn.currentGridRowImpl(124))},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[127]={ id:127 ,lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:124,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUAVIEWCHILDREN",gxz:"ZV29UAViewChildren",gxold:"OV29UAViewChildren",gxvar:"AV29UAViewChildren",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV29UAViewChildren=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV29UAViewChildren=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vUAVIEWCHILDREN",row || gx.fn.currentGridRowImpl(124),gx.O.AV29UAViewChildren,gx.O.AV87Uaviewchildren_GXI)},c2v:function(row){gx.O.AV87Uaviewchildren_GXI=this.val_GXI();if(this.val(row)!==undefined)gx.O.AV29UAViewChildren=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vUAVIEWCHILDREN",row || gx.fn.currentGridRowImpl(124))},val_GXI:function(row){return gx.fn.getGridControlValue("vUAVIEWCHILDREN_GXI",row || gx.fn.currentGridRowImpl(124))}, gxvar_GXI:'AV87Uaviewchildren_GXI',nac:gx.falseFn,evt:"e262v2_client"};
   GXValidFnc[128]={ id:128 ,lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:124,gxgrid:this.GridContainer,fnc:this.Valid_Secfunctionalityid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECFUNCTIONALITYID",gxz:"Z136SecFunctionalityId",gxold:"O136SecFunctionalityId",gxvar:"A136SecFunctionalityId",ucs:[],op:[28,133],ip:[133,28,132],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A136SecFunctionalityId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z136SecFunctionalityId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SECFUNCTIONALITYID",row || gx.fn.currentGridRowImpl(124),gx.O.A136SecFunctionalityId,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A136SecFunctionalityId=gx.num.intval(this.val(row))},val:function(row){return gx.fn.getGridIntegerValue("SECFUNCTIONALITYID",row || gx.fn.currentGridRowImpl(124),'.')},nac:gx.falseFn};
   GXValidFnc[129]={ id:129 ,lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:124,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECFUNCTIONALITYKEY",gxz:"Z138SecFunctionalityKey",gxold:"O138SecFunctionalityKey",gxvar:"A138SecFunctionalityKey",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A138SecFunctionalityKey=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z138SecFunctionalityKey=Value},v2c:function(row){gx.fn.setGridControlValue("SECFUNCTIONALITYKEY",row || gx.fn.currentGridRowImpl(124),gx.O.A138SecFunctionalityKey,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A138SecFunctionalityKey=this.val(row)},val:function(row){return gx.fn.getGridControlValue("SECFUNCTIONALITYKEY",row || gx.fn.currentGridRowImpl(124))},nac:gx.falseFn};
   GXValidFnc[130]={ id:130 ,lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:124,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECFUNCTIONALITYDESCRIPTION",gxz:"Z143SecFunctionalityDescription",gxold:"O143SecFunctionalityDescription",gxvar:"A143SecFunctionalityDescription",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A143SecFunctionalityDescription=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z143SecFunctionalityDescription=Value},v2c:function(row){gx.fn.setGridControlValue("SECFUNCTIONALITYDESCRIPTION",row || gx.fn.currentGridRowImpl(124),gx.O.A143SecFunctionalityDescription,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A143SecFunctionalityDescription=this.val(row)},val:function(row){return gx.fn.getGridControlValue("SECFUNCTIONALITYDESCRIPTION",row || gx.fn.currentGridRowImpl(124))},nac:gx.falseFn};
   GXValidFnc[131]={ id:131 ,lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:124,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECFUNCTIONALITYTYPE",gxz:"Z144SecFunctionalityType",gxold:"O144SecFunctionalityType",gxvar:"A144SecFunctionalityType",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A144SecFunctionalityType=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z144SecFunctionalityType=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridComboBoxValue("SECFUNCTIONALITYTYPE",row || gx.fn.currentGridRowImpl(124),gx.O.A144SecFunctionalityType);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.A144SecFunctionalityType=gx.num.intval(this.val(row))},val:function(row){return gx.fn.getGridIntegerValue("SECFUNCTIONALITYTYPE",row || gx.fn.currentGridRowImpl(124),'.')},nac:gx.falseFn};
   GXValidFnc[132]={ id:132 ,lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:124,gxgrid:this.GridContainer,fnc:this.Valid_Secparentfunctionalityid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECPARENTFUNCTIONALITYID",gxz:"Z137SecParentFunctionalityId",gxold:"O137SecParentFunctionalityId",gxvar:"A137SecParentFunctionalityId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A137SecParentFunctionalityId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z137SecParentFunctionalityId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SECPARENTFUNCTIONALITYID",row || gx.fn.currentGridRowImpl(124),gx.O.A137SecParentFunctionalityId,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A137SecParentFunctionalityId=gx.num.intval(this.val(row))},val:function(row){return gx.fn.getGridIntegerValue("SECPARENTFUNCTIONALITYID",row || gx.fn.currentGridRowImpl(124),'.')},nac:gx.falseFn};
   GXValidFnc[133]={ id:133 ,lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:124,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECPARENTFUNCTIONALITYDESCRIPTION",gxz:"Z146SecParentFunctionalityDescription",gxold:"O146SecParentFunctionalityDescription",gxvar:"A146SecParentFunctionalityDescription",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A146SecParentFunctionalityDescription=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z146SecParentFunctionalityDescription=Value},v2c:function(row){gx.fn.setGridControlValue("SECPARENTFUNCTIONALITYDESCRIPTION",row || gx.fn.currentGridRowImpl(124),gx.O.A146SecParentFunctionalityDescription,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A146SecParentFunctionalityDescription=this.val(row)},val:function(row){return gx.fn.getGridControlValue("SECPARENTFUNCTIONALITYDESCRIPTION",row || gx.fn.currentGridRowImpl(124))},nac:gx.falseFn};
   GXValidFnc[134]={ id:134 ,lvl:2,type:"boolean",len:4,dec:0,sign:false,ro:1,isacc:0,grid:124,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECFUNCTIONALITYACTIVE",gxz:"Z142SecFunctionalityActive",gxold:"O142SecFunctionalityActive",gxvar:"A142SecFunctionalityActive",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.A142SecFunctionalityActive=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z142SecFunctionalityActive=gx.lang.booleanValue(Value)},v2c:function(row){gx.fn.setGridCheckBoxValue("SECFUNCTIONALITYACTIVE",row || gx.fn.currentGridRowImpl(124),gx.O.A142SecFunctionalityActive,true)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A142SecFunctionalityActive=gx.lang.booleanValue(this.val(row))},val:function(row){return gx.fn.getGridControlValue("SECFUNCTIONALITYACTIVE",row || gx.fn.currentGridRowImpl(124))},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[135]={ id: 135, fld:"",grid:0};
   GXValidFnc[136]={ id: 136, fld:"",grid:0};
   GXValidFnc[138]={ id: 138, fld:"",grid:0};
   GXValidFnc[139]={ id: 139, fld:"",grid:0};
   GXValidFnc[140]={ id: 140, fld:"",grid:0};
   GXValidFnc[141]={ id: 141, fld:"",grid:0};
   GXValidFnc[142]={ id: 142, fld:"BTNCONFIRM",grid:0,evt:"e142v2_client",std:"ENTER"};
   GXValidFnc[143]={ id: 143, fld:"",grid:0};
   GXValidFnc[144]={ id: 144, fld:"BTNCANCEL",grid:0,evt:"e292v1_client"};
   GXValidFnc[145]={ id: 145, fld:"",grid:0};
   GXValidFnc[146]={ id: 146, fld:"",grid:0};
   GXValidFnc[147]={ id: 147, fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};
   GXValidFnc[148]={ id: 148, fld:"JSDYNAMICFILTERS", format:1,grid:0};
   GXValidFnc[150]={ id: 150, fld:"TABLEDVELOP_CONFIRMPANEL_UAVIEWCHILDREN",grid:0};
   this.AV8SecRoleName = "" ;
   this.ZV8SecRoleName = "" ;
   this.OV8SecRoleName = "" ;
   this.AV27SecFunctionalityType = 0 ;
   this.ZV27SecFunctionalityType = 0 ;
   this.OV27SecFunctionalityType = 0 ;
   this.AV40DynamicFiltersSelector1 = "" ;
   this.ZV40DynamicFiltersSelector1 = "" ;
   this.OV40DynamicFiltersSelector1 = "" ;
   this.AV41DynamicFiltersOperator1 = 0 ;
   this.ZV41DynamicFiltersOperator1 = 0 ;
   this.OV41DynamicFiltersOperator1 = 0 ;
   this.AV42SecFunctionalityDescription1 = "" ;
   this.ZV42SecFunctionalityDescription1 = "" ;
   this.OV42SecFunctionalityDescription1 = "" ;
   this.AV56SecParentFunctionalityDescription1 = "" ;
   this.ZV56SecParentFunctionalityDescription1 = "" ;
   this.OV56SecParentFunctionalityDescription1 = "" ;
   this.AV43SecFunctionalityKey1 = "" ;
   this.ZV43SecFunctionalityKey1 = "" ;
   this.OV43SecFunctionalityKey1 = "" ;
   this.AV45DynamicFiltersSelector2 = "" ;
   this.ZV45DynamicFiltersSelector2 = "" ;
   this.OV45DynamicFiltersSelector2 = "" ;
   this.AV46DynamicFiltersOperator2 = 0 ;
   this.ZV46DynamicFiltersOperator2 = 0 ;
   this.OV46DynamicFiltersOperator2 = 0 ;
   this.AV47SecFunctionalityDescription2 = "" ;
   this.ZV47SecFunctionalityDescription2 = "" ;
   this.OV47SecFunctionalityDescription2 = "" ;
   this.AV57SecParentFunctionalityDescription2 = "" ;
   this.ZV57SecParentFunctionalityDescription2 = "" ;
   this.OV57SecParentFunctionalityDescription2 = "" ;
   this.AV48SecFunctionalityKey2 = "" ;
   this.ZV48SecFunctionalityKey2 = "" ;
   this.OV48SecFunctionalityKey2 = "" ;
   this.AV50DynamicFiltersSelector3 = "" ;
   this.ZV50DynamicFiltersSelector3 = "" ;
   this.OV50DynamicFiltersSelector3 = "" ;
   this.AV51DynamicFiltersOperator3 = 0 ;
   this.ZV51DynamicFiltersOperator3 = 0 ;
   this.OV51DynamicFiltersOperator3 = 0 ;
   this.AV52SecFunctionalityDescription3 = "" ;
   this.ZV52SecFunctionalityDescription3 = "" ;
   this.OV52SecFunctionalityDescription3 = "" ;
   this.AV58SecParentFunctionalityDescription3 = "" ;
   this.ZV58SecParentFunctionalityDescription3 = "" ;
   this.OV58SecParentFunctionalityDescription3 = "" ;
   this.AV53SecFunctionalityKey3 = "" ;
   this.ZV53SecFunctionalityKey3 = "" ;
   this.OV53SecFunctionalityKey3 = "" ;
   this.ZV18IsAssociated = false ;
   this.OV18IsAssociated = false ;
   this.ZV19IsAssociatedOld = false ;
   this.OV19IsAssociatedOld = false ;
   this.ZV29UAViewChildren = "" ;
   this.OV29UAViewChildren = "" ;
   this.Z136SecFunctionalityId = 0 ;
   this.O136SecFunctionalityId = 0 ;
   this.Z138SecFunctionalityKey = "" ;
   this.O138SecFunctionalityKey = "" ;
   this.Z143SecFunctionalityDescription = "" ;
   this.O143SecFunctionalityDescription = "" ;
   this.Z144SecFunctionalityType = 0 ;
   this.O144SecFunctionalityType = 0 ;
   this.Z137SecParentFunctionalityId = 0 ;
   this.O137SecParentFunctionalityId = 0 ;
   this.Z146SecParentFunctionalityDescription = "" ;
   this.O146SecParentFunctionalityDescription = "" ;
   this.Z142SecFunctionalityActive = false ;
   this.O142SecFunctionalityActive = false ;
   this.AV8SecRoleName = "" ;
   this.AV27SecFunctionalityType = 0 ;
   this.AV40DynamicFiltersSelector1 = "" ;
   this.AV41DynamicFiltersOperator1 = 0 ;
   this.AV42SecFunctionalityDescription1 = "" ;
   this.AV56SecParentFunctionalityDescription1 = "" ;
   this.AV43SecFunctionalityKey1 = "" ;
   this.AV45DynamicFiltersSelector2 = "" ;
   this.AV46DynamicFiltersOperator2 = 0 ;
   this.AV47SecFunctionalityDescription2 = "" ;
   this.AV57SecParentFunctionalityDescription2 = "" ;
   this.AV48SecFunctionalityKey2 = "" ;
   this.AV50DynamicFiltersSelector3 = "" ;
   this.AV51DynamicFiltersOperator3 = 0 ;
   this.AV52SecFunctionalityDescription3 = "" ;
   this.AV58SecParentFunctionalityDescription3 = "" ;
   this.AV53SecFunctionalityKey3 = "" ;
   this.AV81GridCurrentPage = 0 ;
   this.AV74DDO_TitleSettingsIcons = {Default:"",Default_GXI:"",Filtered:"",Filtered_GXI:"",SortedASC:"",SortedASC_GXI:"",SortedDSC:"",SortedDSC_GXI:"",FilteredSortedASC:"",FilteredSortedASC_GXI:"",FilteredSortedDSC:"",FilteredSortedDSC_GXI:"",OptionSortASC:"",OptionSortASC_GXI:"",OptionSortDSC:"",OptionSortDSC_GXI:"",OptionApplyFilter:"",OptionApplyFilter_GXI:"",OptionFilteringData:"",OptionFilteringData_GXI:"",OptionCleanFilters:"",OptionCleanFilters_GXI:"",SelectedOption:"",SelectedOption_GXI:"",MultiselOption:"",MultiselOption_GXI:"",MultiselSelOption:"",MultiselSelOption_GXI:"",TreeviewCollapse:"",TreeviewCollapse_GXI:"",TreeviewExpand:"",TreeviewExpand_GXI:""} ;
   this.AV9SecRoleId = 0 ;
   this.AV18IsAssociated = false ;
   this.AV19IsAssociatedOld = false ;
   this.AV29UAViewChildren = "" ;
   this.A136SecFunctionalityId = 0 ;
   this.A138SecFunctionalityKey = "" ;
   this.A143SecFunctionalityDescription = "" ;
   this.A144SecFunctionalityType = 0 ;
   this.A137SecParentFunctionalityId = 0 ;
   this.A146SecParentFunctionalityDescription = "" ;
   this.A142SecFunctionalityActive = false ;
   this.A139SecRoleId = 0 ;
   this.A148SecRoleName = "" ;
   this.AV44DynamicFiltersEnabled2 = false ;
   this.AV49DynamicFiltersEnabled3 = false ;
   this.AV13SecFunctionalityIdRemovedXml = "" ;
   this.AV12SecFunctionalityIdAddedXml = "" ;
   this.AV38OrderedBy = 0 ;
   this.AV39OrderedDsc = false ;
   this.AV21i = 0 ;
   this.AV11SecFunctionalityIdRemoved = [ ] ;
   this.AV15SecFunctionalityIdToFind = 0 ;
   this.AV10SecFunctionalityIdAdded = [ ] ;
   this.AV34SecRoleIdParm = 0 ;
   this.AV16SecFunctionalityRole = {SecFunctionalityId:0,SecFunctionalityDescription:"",SecRoleId:0,Mode:"",Initialized:0,SecFunctionalityId_Z:0,SecFunctionalityDescription_Z:"",SecRoleId_Z:0} ;
   this.AV35GridState = {CurrentPage:0,OrderedBy:0,OrderedDsc:false,HidingSearch:0,PageSize:"",CollapsedRecords:"",GroupBy:"",FilterValues:[],DynamicFilters:[]} ;
   this.AV55DynamicFiltersIgnoreFirst = false ;
   this.AV54DynamicFiltersRemoving = false ;
   this.AV33SecFunctionalityId_Selected = 0 ;
   this.AV14SecFunctionalityId = 0 ;
   this.AV92GXV4 = 0 ;
   this.AV91GXV3 = 0 ;
   this.AV37GridStateDynamicFilter = {Selected:"",Value:"",Operator:0,ValueTo:""} ;
   this.Events = {"e112v2_client": ["GRIDPAGINATIONBAR.CHANGEPAGE", true] ,"e122v2_client": ["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", true] ,"e132v2_client": ["DDO_GRID.ONOPTIONCLICKED", true] ,"e142v2_client": ["ENTER", true] ,"e152v2_client": ["'REMOVEDYNAMICFILTERS1'", true] ,"e162v2_client": ["'REMOVEDYNAMICFILTERS2'", true] ,"e172v2_client": ["'REMOVEDYNAMICFILTERS3'", true] ,"e262v2_client": ["'DOUAVIEWCHILDREN'", true] ,"e272v2_client": ["VISASSOCIATED.CLICK", true] ,"e182v2_client": ["'ADDDYNAMICFILTERS1'", true] ,"e192v2_client": ["VDYNAMICFILTERSSELECTOR1.CLICK", true] ,"e202v2_client": ["'ADDDYNAMICFILTERS2'", true] ,"e212v2_client": ["VDYNAMICFILTERSSELECTOR2.CLICK", true] ,"e222v2_client": ["VDYNAMICFILTERSSELECTOR3.CLICK", true] ,"e292v1_client": ["CANCEL", true] ,"e282v1_client": ["DVELOP_CONFIRMPANEL_UAVIEWCHILDREN.CLOSE", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vSECFUNCTIONALITYTYPE'},{av:'AV27SecFunctionalityType',fld:'vSECFUNCTIONALITYTYPE',pic:'Z9'},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV41DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV42SecFunctionalityDescription1',fld:'vSECFUNCTIONALITYDESCRIPTION1',pic:''},{av:'AV56SecParentFunctionalityDescription1',fld:'vSECPARENTFUNCTIONALITYDESCRIPTION1',pic:''},{av:'AV43SecFunctionalityKey1',fld:'vSECFUNCTIONALITYKEY1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV46DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV47SecFunctionalityDescription2',fld:'vSECFUNCTIONALITYDESCRIPTION2',pic:''},{av:'AV57SecParentFunctionalityDescription2',fld:'vSECPARENTFUNCTIONALITYDESCRIPTION2',pic:''},{av:'AV48SecFunctionalityKey2',fld:'vSECFUNCTIONALITYKEY2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV51DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV52SecFunctionalityDescription3',fld:'vSECFUNCTIONALITYDESCRIPTION3',pic:''},{av:'AV58SecParentFunctionalityDescription3',fld:'vSECPARENTFUNCTIONALITYDESCRIPTION3',pic:''},{av:'AV53SecFunctionalityKey3',fld:'vSECFUNCTIONALITYKEY3',pic:''},{av:'A139SecRoleId',fld:'SECROLEID',pic:'ZZZ9'},{av:'AV21i',fld:'vI',pic:'ZZZZZZZZZ9'},{av:'AV11SecFunctionalityIdRemoved',fld:'vSECFUNCTIONALITYIDREMOVED',pic:''},{av:'AV15SecFunctionalityIdToFind',fld:'vSECFUNCTIONALITYIDTOFIND',pic:'ZZZZZZZZZ9'},{av:'AV10SecFunctionalityIdAdded',fld:'vSECFUNCTIONALITYIDADDED',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV40DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{av:'AV44DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV45DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{av:'AV49DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV50DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{av:'AV13SecFunctionalityIdRemovedXml',fld:'vSECFUNCTIONALITYIDREMOVEDXML',pic:''},{av:'AV12SecFunctionalityIdAddedXml',fld:'vSECFUNCTIONALITYIDADDEDXML',pic:''},{av:'AV9SecRoleId',fld:'vSECROLEID',pic:'ZZZ9',hsh:true},{av:'AV34SecRoleIdParm',fld:'vSECROLEIDPARM',pic:'ZZZ9',hsh:true}],[{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV41DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV46DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV51DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV81GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV82GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV11SecFunctionalityIdRemoved',fld:'vSECFUNCTIONALITYIDREMOVED',pic:''},{av:'AV10SecFunctionalityIdAdded',fld:'vSECFUNCTIONALITYIDADDED',pic:''}]];
   this.EvtParms["START"] = [[{av:'AV38OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'A139SecRoleId',fld:'SECROLEID',pic:'ZZZ9'},{av:'AV9SecRoleId',fld:'vSECROLEID',pic:'ZZZ9',hsh:true},{av:'A148SecRoleName',fld:'SECROLENAME',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV40DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV45DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV50DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{av:'AV35GridState',fld:'vGRIDSTATE',pic:''},{av:'AV54DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV39OrderedDsc',fld:'vORDEREDDSC',pic:''}],[{ctrl:'GRID',prop:'Rows'},{av:'gx.fn.getCtrlProperty("JSDYNAMICFILTERS","Caption")',ctrl:'JSDYNAMICFILTERS',prop:'Caption'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV40DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV45DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV50DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Jsonclick")',ctrl:'ADDDYNAMICFILTERS1',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Jsonclick")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Jsonclick")',ctrl:'ADDDYNAMICFILTERS2',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Jsonclick")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS3","Jsonclick")',ctrl:'REMOVEDYNAMICFILTERS3',prop:'Jsonclick'},{ctrl:'vSECFUNCTIONALITYTYPE'},{av:'AV27SecFunctionalityType',fld:'vSECFUNCTIONALITYTYPE',pic:'Z9'},{av:'this.DDO_GRIDContainer.GridInternalName',ctrl:'DDO_GRID',prop:'GridInternalName'},{ctrl:'FORM',prop:'Caption'},{av:'AV38OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV8SecRoleName',fld:'vSECROLENAME',pic:''},{av:'gx.fn.getCtrlProperty("vSECROLENAME","Enabled")',ctrl:'vSECROLENAME',prop:'Enabled'},{av:'AV74DDO_TitleSettingsIcons',fld:'vDDO_TITLESETTINGSICONS',pic:''},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYDESCRIPTION1","Visible")',ctrl:'vSECFUNCTIONALITYDESCRIPTION1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECPARENTFUNCTIONALITYDESCRIPTION1","Visible")',ctrl:'vSECPARENTFUNCTIONALITYDESCRIPTION1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYKEY1","Visible")',ctrl:'vSECFUNCTIONALITYKEY1',prop:'Visible'},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYDESCRIPTION2","Visible")',ctrl:'vSECFUNCTIONALITYDESCRIPTION2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECPARENTFUNCTIONALITYDESCRIPTION2","Visible")',ctrl:'vSECPARENTFUNCTIONALITYDESCRIPTION2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYKEY2","Visible")',ctrl:'vSECFUNCTIONALITYKEY2',prop:'Visible'},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYDESCRIPTION3","Visible")',ctrl:'vSECFUNCTIONALITYDESCRIPTION3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECPARENTFUNCTIONALITYDESCRIPTION3","Visible")',ctrl:'vSECPARENTFUNCTIONALITYDESCRIPTION3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYKEY3","Visible")',ctrl:'vSECFUNCTIONALITYKEY3',prop:'Visible'},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'},{av:'AV41DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV42SecFunctionalityDescription1',fld:'vSECFUNCTIONALITYDESCRIPTION1',pic:''},{av:'AV56SecParentFunctionalityDescription1',fld:'vSECPARENTFUNCTIONALITYDESCRIPTION1',pic:''},{av:'AV43SecFunctionalityKey1',fld:'vSECFUNCTIONALITYKEY1',pic:''},{av:'AV44DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV46DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV47SecFunctionalityDescription2',fld:'vSECFUNCTIONALITYDESCRIPTION2',pic:''},{av:'AV57SecParentFunctionalityDescription2',fld:'vSECPARENTFUNCTIONALITYDESCRIPTION2',pic:''},{av:'AV48SecFunctionalityKey2',fld:'vSECFUNCTIONALITYKEY2',pic:''},{av:'AV49DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV51DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV52SecFunctionalityDescription3',fld:'vSECFUNCTIONALITYDESCRIPTION3',pic:''},{av:'AV58SecParentFunctionalityDescription3',fld:'vSECPARENTFUNCTIONALITYDESCRIPTION3',pic:''},{av:'AV53SecFunctionalityKey3',fld:'vSECFUNCTIONALITYKEY3',pic:''},{av:'this.DDO_GRIDContainer.SortedStatus',ctrl:'DDO_GRID',prop:'SortedStatus'}]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vSECFUNCTIONALITYTYPE'},{av:'AV27SecFunctionalityType',fld:'vSECFUNCTIONALITYTYPE',pic:'Z9'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV40DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV41DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV42SecFunctionalityDescription1',fld:'vSECFUNCTIONALITYDESCRIPTION1',pic:''},{av:'AV56SecParentFunctionalityDescription1',fld:'vSECPARENTFUNCTIONALITYDESCRIPTION1',pic:''},{av:'AV43SecFunctionalityKey1',fld:'vSECFUNCTIONALITYKEY1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV45DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV46DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV47SecFunctionalityDescription2',fld:'vSECFUNCTIONALITYDESCRIPTION2',pic:''},{av:'AV57SecParentFunctionalityDescription2',fld:'vSECPARENTFUNCTIONALITYDESCRIPTION2',pic:''},{av:'AV48SecFunctionalityKey2',fld:'vSECFUNCTIONALITYKEY2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV50DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV51DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV52SecFunctionalityDescription3',fld:'vSECFUNCTIONALITYDESCRIPTION3',pic:''},{av:'AV58SecParentFunctionalityDescription3',fld:'vSECPARENTFUNCTIONALITYDESCRIPTION3',pic:''},{av:'AV53SecFunctionalityKey3',fld:'vSECFUNCTIONALITYKEY3',pic:''},{av:'AV44DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV49DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV13SecFunctionalityIdRemovedXml',fld:'vSECFUNCTIONALITYIDREMOVEDXML',pic:''},{av:'AV12SecFunctionalityIdAddedXml',fld:'vSECFUNCTIONALITYIDADDEDXML',pic:''},{av:'AV9SecRoleId',fld:'vSECROLEID',pic:'ZZZ9',hsh:true},{av:'A139SecRoleId',fld:'SECROLEID',pic:'ZZZ9'},{av:'AV21i',fld:'vI',pic:'ZZZZZZZZZ9'},{av:'AV11SecFunctionalityIdRemoved',fld:'vSECFUNCTIONALITYIDREMOVED',pic:''},{av:'AV15SecFunctionalityIdToFind',fld:'vSECFUNCTIONALITYIDTOFIND',pic:'ZZZZZZZZZ9'},{av:'AV10SecFunctionalityIdAdded',fld:'vSECFUNCTIONALITYIDADDED',pic:''},{av:'AV34SecRoleIdParm',fld:'vSECROLEIDPARM',pic:'ZZZ9',hsh:true},{av:'this.GRIDPAGINATIONBARContainer.SelectedPage',ctrl:'GRIDPAGINATIONBAR',prop:'SelectedPage'}],[]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vSECFUNCTIONALITYTYPE'},{av:'AV27SecFunctionalityType',fld:'vSECFUNCTIONALITYTYPE',pic:'Z9'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV40DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV41DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV42SecFunctionalityDescription1',fld:'vSECFUNCTIONALITYDESCRIPTION1',pic:''},{av:'AV56SecParentFunctionalityDescription1',fld:'vSECPARENTFUNCTIONALITYDESCRIPTION1',pic:''},{av:'AV43SecFunctionalityKey1',fld:'vSECFUNCTIONALITYKEY1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV45DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV46DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV47SecFunctionalityDescription2',fld:'vSECFUNCTIONALITYDESCRIPTION2',pic:''},{av:'AV57SecParentFunctionalityDescription2',fld:'vSECPARENTFUNCTIONALITYDESCRIPTION2',pic:''},{av:'AV48SecFunctionalityKey2',fld:'vSECFUNCTIONALITYKEY2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV50DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV51DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV52SecFunctionalityDescription3',fld:'vSECFUNCTIONALITYDESCRIPTION3',pic:''},{av:'AV58SecParentFunctionalityDescription3',fld:'vSECPARENTFUNCTIONALITYDESCRIPTION3',pic:''},{av:'AV53SecFunctionalityKey3',fld:'vSECFUNCTIONALITYKEY3',pic:''},{av:'AV44DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV49DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV13SecFunctionalityIdRemovedXml',fld:'vSECFUNCTIONALITYIDREMOVEDXML',pic:''},{av:'AV12SecFunctionalityIdAddedXml',fld:'vSECFUNCTIONALITYIDADDEDXML',pic:''},{av:'AV9SecRoleId',fld:'vSECROLEID',pic:'ZZZ9',hsh:true},{av:'A139SecRoleId',fld:'SECROLEID',pic:'ZZZ9'},{av:'AV21i',fld:'vI',pic:'ZZZZZZZZZ9'},{av:'AV11SecFunctionalityIdRemoved',fld:'vSECFUNCTIONALITYIDREMOVED',pic:''},{av:'AV15SecFunctionalityIdToFind',fld:'vSECFUNCTIONALITYIDTOFIND',pic:'ZZZZZZZZZ9'},{av:'AV10SecFunctionalityIdAdded',fld:'vSECFUNCTIONALITYIDADDED',pic:''},{av:'AV34SecRoleIdParm',fld:'vSECROLEIDPARM',pic:'ZZZ9',hsh:true},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'}],[{ctrl:'GRID',prop:'Rows'}]];
   this.EvtParms["DDO_GRID.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vSECFUNCTIONALITYTYPE'},{av:'AV27SecFunctionalityType',fld:'vSECFUNCTIONALITYTYPE',pic:'Z9'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV40DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV41DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV42SecFunctionalityDescription1',fld:'vSECFUNCTIONALITYDESCRIPTION1',pic:''},{av:'AV56SecParentFunctionalityDescription1',fld:'vSECPARENTFUNCTIONALITYDESCRIPTION1',pic:''},{av:'AV43SecFunctionalityKey1',fld:'vSECFUNCTIONALITYKEY1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV45DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV46DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV47SecFunctionalityDescription2',fld:'vSECFUNCTIONALITYDESCRIPTION2',pic:''},{av:'AV57SecParentFunctionalityDescription2',fld:'vSECPARENTFUNCTIONALITYDESCRIPTION2',pic:''},{av:'AV48SecFunctionalityKey2',fld:'vSECFUNCTIONALITYKEY2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV50DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV51DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV52SecFunctionalityDescription3',fld:'vSECFUNCTIONALITYDESCRIPTION3',pic:''},{av:'AV58SecParentFunctionalityDescription3',fld:'vSECPARENTFUNCTIONALITYDESCRIPTION3',pic:''},{av:'AV53SecFunctionalityKey3',fld:'vSECFUNCTIONALITYKEY3',pic:''},{av:'AV44DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV49DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV13SecFunctionalityIdRemovedXml',fld:'vSECFUNCTIONALITYIDREMOVEDXML',pic:''},{av:'AV12SecFunctionalityIdAddedXml',fld:'vSECFUNCTIONALITYIDADDEDXML',pic:''},{av:'AV9SecRoleId',fld:'vSECROLEID',pic:'ZZZ9',hsh:true},{av:'A139SecRoleId',fld:'SECROLEID',pic:'ZZZ9'},{av:'AV21i',fld:'vI',pic:'ZZZZZZZZZ9'},{av:'AV11SecFunctionalityIdRemoved',fld:'vSECFUNCTIONALITYIDREMOVED',pic:''},{av:'AV15SecFunctionalityIdToFind',fld:'vSECFUNCTIONALITYIDTOFIND',pic:'ZZZZZZZZZ9'},{av:'AV10SecFunctionalityIdAdded',fld:'vSECFUNCTIONALITYIDADDED',pic:''},{av:'AV34SecRoleIdParm',fld:'vSECROLEIDPARM',pic:'ZZZ9',hsh:true},{av:'this.DDO_GRIDContainer.ActiveEventKey',ctrl:'DDO_GRID',prop:'ActiveEventKey'},{av:'this.DDO_GRIDContainer.SelectedValue_get',ctrl:'DDO_GRID',prop:'SelectedValue_get'},{av:'AV38OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV39OrderedDsc',fld:'vORDEREDDSC',pic:''}],[{av:'AV38OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV39OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_GRIDContainer.SortedStatus',ctrl:'DDO_GRID',prop:'SortedStatus'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A136SecFunctionalityId',fld:'SECFUNCTIONALITYID',pic:'ZZZZZZZZZ9',hsh:true},{av:'AV9SecRoleId',fld:'vSECROLEID',pic:'ZZZ9',hsh:true},{av:'A139SecRoleId',fld:'SECROLEID',pic:'ZZZ9'},{av:'AV21i',fld:'vI',pic:'ZZZZZZZZZ9'},{av:'AV11SecFunctionalityIdRemoved',fld:'vSECFUNCTIONALITYIDREMOVED',pic:''},{av:'AV15SecFunctionalityIdToFind',fld:'vSECFUNCTIONALITYIDTOFIND',pic:'ZZZZZZZZZ9'},{av:'AV10SecFunctionalityIdAdded',fld:'vSECFUNCTIONALITYIDADDED',pic:''},{av:'AV56SecParentFunctionalityDescription1',fld:'vSECPARENTFUNCTIONALITYDESCRIPTION1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV40DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV41DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV57SecParentFunctionalityDescription2',fld:'vSECPARENTFUNCTIONALITYDESCRIPTION2',pic:''},{av:'AV44DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV45DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV46DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV58SecParentFunctionalityDescription3',fld:'vSECPARENTFUNCTIONALITYDESCRIPTION3',pic:''},{av:'AV49DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV50DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV51DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV34SecRoleIdParm',fld:'vSECROLEIDPARM',pic:'ZZZ9',hsh:true}],[{av:'AV29UAViewChildren',fld:'vUAVIEWCHILDREN',pic:''},{av:'gx.fn.getCtrlProperty("vUAVIEWCHILDREN","Tooltiptext")',ctrl:'vUAVIEWCHILDREN',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vUAVIEWCHILDREN","Class")',ctrl:'vUAVIEWCHILDREN',prop:'Class'},{av:'AV34SecRoleIdParm',fld:'vSECROLEIDPARM',pic:'ZZZ9',hsh:true},{av:'AV19IsAssociatedOld',fld:'vISASSOCIATEDOLD',pic:'',hsh:true},{av:'AV15SecFunctionalityIdToFind',fld:'vSECFUNCTIONALITYIDTOFIND',pic:'ZZZZZZZZZ9'},{av:'AV18IsAssociated',fld:'vISASSOCIATED',pic:''},{av:'AV21i',fld:'vI',pic:'ZZZZZZZZZ9'}]];
   this.EvtParms["ENTER"] = [[{av:'AV11SecFunctionalityIdRemoved',fld:'vSECFUNCTIONALITYIDREMOVED',pic:''},{av:'AV9SecRoleId',fld:'vSECROLEID',pic:'ZZZ9',hsh:true},{av:'AV10SecFunctionalityIdAdded',fld:'vSECFUNCTIONALITYIDADDED',pic:''},{av:'AV13SecFunctionalityIdRemovedXml',fld:'vSECFUNCTIONALITYIDREMOVEDXML',pic:''},{av:'AV12SecFunctionalityIdAddedXml',fld:'vSECFUNCTIONALITYIDADDEDXML',pic:''},{av:'AV16SecFunctionalityRole',fld:'vSECFUNCTIONALITYROLE',pic:''}],[{av:'AV21i',fld:'vI',pic:'ZZZZZZZZZ9'},{av:'AV16SecFunctionalityRole',fld:'vSECFUNCTIONALITYROLE',pic:''},{av:'AV12SecFunctionalityIdAddedXml',fld:'vSECFUNCTIONALITYIDADDEDXML',pic:''},{av:'AV13SecFunctionalityIdRemovedXml',fld:'vSECFUNCTIONALITYIDREMOVEDXML',pic:''},{av:'AV11SecFunctionalityIdRemoved',fld:'vSECFUNCTIONALITYIDREMOVED',pic:''},{av:'AV10SecFunctionalityIdAdded',fld:'vSECFUNCTIONALITYIDADDED',pic:''}]];
   this.EvtParms["'ADDDYNAMICFILTERS1'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vSECFUNCTIONALITYTYPE'},{av:'AV27SecFunctionalityType',fld:'vSECFUNCTIONALITYTYPE',pic:'Z9'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV40DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV41DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV42SecFunctionalityDescription1',fld:'vSECFUNCTIONALITYDESCRIPTION1',pic:''},{av:'AV56SecParentFunctionalityDescription1',fld:'vSECPARENTFUNCTIONALITYDESCRIPTION1',pic:''},{av:'AV43SecFunctionalityKey1',fld:'vSECFUNCTIONALITYKEY1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV45DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV46DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV47SecFunctionalityDescription2',fld:'vSECFUNCTIONALITYDESCRIPTION2',pic:''},{av:'AV57SecParentFunctionalityDescription2',fld:'vSECPARENTFUNCTIONALITYDESCRIPTION2',pic:''},{av:'AV48SecFunctionalityKey2',fld:'vSECFUNCTIONALITYKEY2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV50DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV51DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV52SecFunctionalityDescription3',fld:'vSECFUNCTIONALITYDESCRIPTION3',pic:''},{av:'AV58SecParentFunctionalityDescription3',fld:'vSECPARENTFUNCTIONALITYDESCRIPTION3',pic:''},{av:'AV53SecFunctionalityKey3',fld:'vSECFUNCTIONALITYKEY3',pic:''},{av:'AV44DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV49DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV13SecFunctionalityIdRemovedXml',fld:'vSECFUNCTIONALITYIDREMOVEDXML',pic:''},{av:'AV12SecFunctionalityIdAddedXml',fld:'vSECFUNCTIONALITYIDADDEDXML',pic:''},{av:'AV9SecRoleId',fld:'vSECROLEID',pic:'ZZZ9',hsh:true},{av:'A139SecRoleId',fld:'SECROLEID',pic:'ZZZ9'},{av:'AV21i',fld:'vI',pic:'ZZZZZZZZZ9'},{av:'AV11SecFunctionalityIdRemoved',fld:'vSECFUNCTIONALITYIDREMOVED',pic:''},{av:'AV15SecFunctionalityIdToFind',fld:'vSECFUNCTIONALITYIDTOFIND',pic:'ZZZZZZZZZ9'},{av:'AV10SecFunctionalityIdAdded',fld:'vSECFUNCTIONALITYIDADDED',pic:''},{av:'AV34SecRoleIdParm',fld:'vSECROLEIDPARM',pic:'ZZZ9',hsh:true}],[{av:'AV44DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV41DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV46DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV51DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV81GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV82GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV11SecFunctionalityIdRemoved',fld:'vSECFUNCTIONALITYIDREMOVED',pic:''},{av:'AV10SecFunctionalityIdAdded',fld:'vSECFUNCTIONALITYIDADDED',pic:''}]];
   this.EvtParms["'REMOVEDYNAMICFILTERS1'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vSECFUNCTIONALITYTYPE'},{av:'AV27SecFunctionalityType',fld:'vSECFUNCTIONALITYTYPE',pic:'Z9'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV40DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV41DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV42SecFunctionalityDescription1',fld:'vSECFUNCTIONALITYDESCRIPTION1',pic:''},{av:'AV56SecParentFunctionalityDescription1',fld:'vSECPARENTFUNCTIONALITYDESCRIPTION1',pic:''},{av:'AV43SecFunctionalityKey1',fld:'vSECFUNCTIONALITYKEY1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV45DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV46DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV47SecFunctionalityDescription2',fld:'vSECFUNCTIONALITYDESCRIPTION2',pic:''},{av:'AV57SecParentFunctionalityDescription2',fld:'vSECPARENTFUNCTIONALITYDESCRIPTION2',pic:''},{av:'AV48SecFunctionalityKey2',fld:'vSECFUNCTIONALITYKEY2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV50DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV51DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV52SecFunctionalityDescription3',fld:'vSECFUNCTIONALITYDESCRIPTION3',pic:''},{av:'AV58SecParentFunctionalityDescription3',fld:'vSECPARENTFUNCTIONALITYDESCRIPTION3',pic:''},{av:'AV53SecFunctionalityKey3',fld:'vSECFUNCTIONALITYKEY3',pic:''},{av:'AV44DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV49DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV13SecFunctionalityIdRemovedXml',fld:'vSECFUNCTIONALITYIDREMOVEDXML',pic:''},{av:'AV12SecFunctionalityIdAddedXml',fld:'vSECFUNCTIONALITYIDADDEDXML',pic:''},{av:'AV9SecRoleId',fld:'vSECROLEID',pic:'ZZZ9',hsh:true},{av:'A139SecRoleId',fld:'SECROLEID',pic:'ZZZ9'},{av:'AV21i',fld:'vI',pic:'ZZZZZZZZZ9'},{av:'AV11SecFunctionalityIdRemoved',fld:'vSECFUNCTIONALITYIDREMOVED',pic:''},{av:'AV15SecFunctionalityIdToFind',fld:'vSECFUNCTIONALITYIDTOFIND',pic:'ZZZZZZZZZ9'},{av:'AV10SecFunctionalityIdAdded',fld:'vSECFUNCTIONALITYIDADDED',pic:''},{av:'AV34SecRoleIdParm',fld:'vSECROLEIDPARM',pic:'ZZZ9',hsh:true},{av:'AV35GridState',fld:'vGRIDSTATE',pic:''},{av:'AV55DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV54DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''}],[{av:'AV54DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV55DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV35GridState',fld:'vGRIDSTATE',pic:''},{av:'AV44DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV45DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV46DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV47SecFunctionalityDescription2',fld:'vSECFUNCTIONALITYDESCRIPTION2',pic:''},{av:'AV49DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV50DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV51DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV52SecFunctionalityDescription3',fld:'vSECFUNCTIONALITYDESCRIPTION3',pic:''},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV40DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV41DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV42SecFunctionalityDescription1',fld:'vSECFUNCTIONALITYDESCRIPTION1',pic:''},{av:'AV56SecParentFunctionalityDescription1',fld:'vSECPARENTFUNCTIONALITYDESCRIPTION1',pic:''},{av:'AV43SecFunctionalityKey1',fld:'vSECFUNCTIONALITYKEY1',pic:''},{av:'gx.fn.getCtrlProperty("JSDYNAMICFILTERS","Caption")',ctrl:'JSDYNAMICFILTERS',prop:'Caption'},{av:'AV57SecParentFunctionalityDescription2',fld:'vSECPARENTFUNCTIONALITYDESCRIPTION2',pic:''},{av:'AV48SecFunctionalityKey2',fld:'vSECFUNCTIONALITYKEY2',pic:''},{av:'AV58SecParentFunctionalityDescription3',fld:'vSECPARENTFUNCTIONALITYDESCRIPTION3',pic:''},{av:'AV53SecFunctionalityKey3',fld:'vSECFUNCTIONALITYKEY3',pic:''},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYDESCRIPTION2","Visible")',ctrl:'vSECFUNCTIONALITYDESCRIPTION2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECPARENTFUNCTIONALITYDESCRIPTION2","Visible")',ctrl:'vSECPARENTFUNCTIONALITYDESCRIPTION2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYKEY2","Visible")',ctrl:'vSECFUNCTIONALITYKEY2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYDESCRIPTION3","Visible")',ctrl:'vSECFUNCTIONALITYDESCRIPTION3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECPARENTFUNCTIONALITYDESCRIPTION3","Visible")',ctrl:'vSECPARENTFUNCTIONALITYDESCRIPTION3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYKEY3","Visible")',ctrl:'vSECFUNCTIONALITYKEY3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYDESCRIPTION1","Visible")',ctrl:'vSECFUNCTIONALITYDESCRIPTION1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECPARENTFUNCTIONALITYDESCRIPTION1","Visible")',ctrl:'vSECPARENTFUNCTIONALITYDESCRIPTION1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYKEY1","Visible")',ctrl:'vSECFUNCTIONALITYKEY1',prop:'Visible'},{av:'AV81GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV82GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV11SecFunctionalityIdRemoved',fld:'vSECFUNCTIONALITYIDREMOVED',pic:''},{av:'AV10SecFunctionalityIdAdded',fld:'vSECFUNCTIONALITYIDADDED',pic:''}]];
   this.EvtParms["VDYNAMICFILTERSSELECTOR1.CLICK"] = [[{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV40DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''}],[{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV41DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYDESCRIPTION1","Visible")',ctrl:'vSECFUNCTIONALITYDESCRIPTION1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECPARENTFUNCTIONALITYDESCRIPTION1","Visible")',ctrl:'vSECPARENTFUNCTIONALITYDESCRIPTION1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYKEY1","Visible")',ctrl:'vSECFUNCTIONALITYKEY1',prop:'Visible'}]];
   this.EvtParms["'ADDDYNAMICFILTERS2'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vSECFUNCTIONALITYTYPE'},{av:'AV27SecFunctionalityType',fld:'vSECFUNCTIONALITYTYPE',pic:'Z9'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV40DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV41DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV42SecFunctionalityDescription1',fld:'vSECFUNCTIONALITYDESCRIPTION1',pic:''},{av:'AV56SecParentFunctionalityDescription1',fld:'vSECPARENTFUNCTIONALITYDESCRIPTION1',pic:''},{av:'AV43SecFunctionalityKey1',fld:'vSECFUNCTIONALITYKEY1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV45DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV46DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV47SecFunctionalityDescription2',fld:'vSECFUNCTIONALITYDESCRIPTION2',pic:''},{av:'AV57SecParentFunctionalityDescription2',fld:'vSECPARENTFUNCTIONALITYDESCRIPTION2',pic:''},{av:'AV48SecFunctionalityKey2',fld:'vSECFUNCTIONALITYKEY2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV50DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV51DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV52SecFunctionalityDescription3',fld:'vSECFUNCTIONALITYDESCRIPTION3',pic:''},{av:'AV58SecParentFunctionalityDescription3',fld:'vSECPARENTFUNCTIONALITYDESCRIPTION3',pic:''},{av:'AV53SecFunctionalityKey3',fld:'vSECFUNCTIONALITYKEY3',pic:''},{av:'AV44DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV49DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV13SecFunctionalityIdRemovedXml',fld:'vSECFUNCTIONALITYIDREMOVEDXML',pic:''},{av:'AV12SecFunctionalityIdAddedXml',fld:'vSECFUNCTIONALITYIDADDEDXML',pic:''},{av:'AV9SecRoleId',fld:'vSECROLEID',pic:'ZZZ9',hsh:true},{av:'A139SecRoleId',fld:'SECROLEID',pic:'ZZZ9'},{av:'AV21i',fld:'vI',pic:'ZZZZZZZZZ9'},{av:'AV11SecFunctionalityIdRemoved',fld:'vSECFUNCTIONALITYIDREMOVED',pic:''},{av:'AV15SecFunctionalityIdToFind',fld:'vSECFUNCTIONALITYIDTOFIND',pic:'ZZZZZZZZZ9'},{av:'AV10SecFunctionalityIdAdded',fld:'vSECFUNCTIONALITYIDADDED',pic:''},{av:'AV34SecRoleIdParm',fld:'vSECROLEIDPARM',pic:'ZZZ9',hsh:true}],[{av:'AV49DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV41DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV46DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV51DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV81GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV82GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV11SecFunctionalityIdRemoved',fld:'vSECFUNCTIONALITYIDREMOVED',pic:''},{av:'AV10SecFunctionalityIdAdded',fld:'vSECFUNCTIONALITYIDADDED',pic:''}]];
   this.EvtParms["'REMOVEDYNAMICFILTERS2'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vSECFUNCTIONALITYTYPE'},{av:'AV27SecFunctionalityType',fld:'vSECFUNCTIONALITYTYPE',pic:'Z9'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV40DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV41DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV42SecFunctionalityDescription1',fld:'vSECFUNCTIONALITYDESCRIPTION1',pic:''},{av:'AV56SecParentFunctionalityDescription1',fld:'vSECPARENTFUNCTIONALITYDESCRIPTION1',pic:''},{av:'AV43SecFunctionalityKey1',fld:'vSECFUNCTIONALITYKEY1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV45DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV46DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV47SecFunctionalityDescription2',fld:'vSECFUNCTIONALITYDESCRIPTION2',pic:''},{av:'AV57SecParentFunctionalityDescription2',fld:'vSECPARENTFUNCTIONALITYDESCRIPTION2',pic:''},{av:'AV48SecFunctionalityKey2',fld:'vSECFUNCTIONALITYKEY2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV50DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV51DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV52SecFunctionalityDescription3',fld:'vSECFUNCTIONALITYDESCRIPTION3',pic:''},{av:'AV58SecParentFunctionalityDescription3',fld:'vSECPARENTFUNCTIONALITYDESCRIPTION3',pic:''},{av:'AV53SecFunctionalityKey3',fld:'vSECFUNCTIONALITYKEY3',pic:''},{av:'AV44DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV49DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV13SecFunctionalityIdRemovedXml',fld:'vSECFUNCTIONALITYIDREMOVEDXML',pic:''},{av:'AV12SecFunctionalityIdAddedXml',fld:'vSECFUNCTIONALITYIDADDEDXML',pic:''},{av:'AV9SecRoleId',fld:'vSECROLEID',pic:'ZZZ9',hsh:true},{av:'A139SecRoleId',fld:'SECROLEID',pic:'ZZZ9'},{av:'AV21i',fld:'vI',pic:'ZZZZZZZZZ9'},{av:'AV11SecFunctionalityIdRemoved',fld:'vSECFUNCTIONALITYIDREMOVED',pic:''},{av:'AV15SecFunctionalityIdToFind',fld:'vSECFUNCTIONALITYIDTOFIND',pic:'ZZZZZZZZZ9'},{av:'AV10SecFunctionalityIdAdded',fld:'vSECFUNCTIONALITYIDADDED',pic:''},{av:'AV34SecRoleIdParm',fld:'vSECROLEIDPARM',pic:'ZZZ9',hsh:true},{av:'AV35GridState',fld:'vGRIDSTATE',pic:''},{av:'AV55DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV54DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''}],[{av:'AV54DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV44DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV35GridState',fld:'vGRIDSTATE',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV45DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV46DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV47SecFunctionalityDescription2',fld:'vSECFUNCTIONALITYDESCRIPTION2',pic:''},{av:'AV49DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV50DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV51DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV52SecFunctionalityDescription3',fld:'vSECFUNCTIONALITYDESCRIPTION3',pic:''},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV40DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV41DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV42SecFunctionalityDescription1',fld:'vSECFUNCTIONALITYDESCRIPTION1',pic:''},{av:'AV56SecParentFunctionalityDescription1',fld:'vSECPARENTFUNCTIONALITYDESCRIPTION1',pic:''},{av:'AV43SecFunctionalityKey1',fld:'vSECFUNCTIONALITYKEY1',pic:''},{av:'gx.fn.getCtrlProperty("JSDYNAMICFILTERS","Caption")',ctrl:'JSDYNAMICFILTERS',prop:'Caption'},{av:'AV57SecParentFunctionalityDescription2',fld:'vSECPARENTFUNCTIONALITYDESCRIPTION2',pic:''},{av:'AV48SecFunctionalityKey2',fld:'vSECFUNCTIONALITYKEY2',pic:''},{av:'AV58SecParentFunctionalityDescription3',fld:'vSECPARENTFUNCTIONALITYDESCRIPTION3',pic:''},{av:'AV53SecFunctionalityKey3',fld:'vSECFUNCTIONALITYKEY3',pic:''},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYDESCRIPTION2","Visible")',ctrl:'vSECFUNCTIONALITYDESCRIPTION2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECPARENTFUNCTIONALITYDESCRIPTION2","Visible")',ctrl:'vSECPARENTFUNCTIONALITYDESCRIPTION2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYKEY2","Visible")',ctrl:'vSECFUNCTIONALITYKEY2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYDESCRIPTION3","Visible")',ctrl:'vSECFUNCTIONALITYDESCRIPTION3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECPARENTFUNCTIONALITYDESCRIPTION3","Visible")',ctrl:'vSECPARENTFUNCTIONALITYDESCRIPTION3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYKEY3","Visible")',ctrl:'vSECFUNCTIONALITYKEY3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYDESCRIPTION1","Visible")',ctrl:'vSECFUNCTIONALITYDESCRIPTION1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECPARENTFUNCTIONALITYDESCRIPTION1","Visible")',ctrl:'vSECPARENTFUNCTIONALITYDESCRIPTION1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYKEY1","Visible")',ctrl:'vSECFUNCTIONALITYKEY1',prop:'Visible'},{av:'AV81GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV82GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV11SecFunctionalityIdRemoved',fld:'vSECFUNCTIONALITYIDREMOVED',pic:''},{av:'AV10SecFunctionalityIdAdded',fld:'vSECFUNCTIONALITYIDADDED',pic:''}]];
   this.EvtParms["VDYNAMICFILTERSSELECTOR2.CLICK"] = [[{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV45DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''}],[{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV46DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYDESCRIPTION2","Visible")',ctrl:'vSECFUNCTIONALITYDESCRIPTION2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECPARENTFUNCTIONALITYDESCRIPTION2","Visible")',ctrl:'vSECPARENTFUNCTIONALITYDESCRIPTION2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYKEY2","Visible")',ctrl:'vSECFUNCTIONALITYKEY2',prop:'Visible'}]];
   this.EvtParms["'REMOVEDYNAMICFILTERS3'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vSECFUNCTIONALITYTYPE'},{av:'AV27SecFunctionalityType',fld:'vSECFUNCTIONALITYTYPE',pic:'Z9'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV40DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV41DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV42SecFunctionalityDescription1',fld:'vSECFUNCTIONALITYDESCRIPTION1',pic:''},{av:'AV56SecParentFunctionalityDescription1',fld:'vSECPARENTFUNCTIONALITYDESCRIPTION1',pic:''},{av:'AV43SecFunctionalityKey1',fld:'vSECFUNCTIONALITYKEY1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV45DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV46DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV47SecFunctionalityDescription2',fld:'vSECFUNCTIONALITYDESCRIPTION2',pic:''},{av:'AV57SecParentFunctionalityDescription2',fld:'vSECPARENTFUNCTIONALITYDESCRIPTION2',pic:''},{av:'AV48SecFunctionalityKey2',fld:'vSECFUNCTIONALITYKEY2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV50DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV51DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV52SecFunctionalityDescription3',fld:'vSECFUNCTIONALITYDESCRIPTION3',pic:''},{av:'AV58SecParentFunctionalityDescription3',fld:'vSECPARENTFUNCTIONALITYDESCRIPTION3',pic:''},{av:'AV53SecFunctionalityKey3',fld:'vSECFUNCTIONALITYKEY3',pic:''},{av:'AV44DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV49DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV13SecFunctionalityIdRemovedXml',fld:'vSECFUNCTIONALITYIDREMOVEDXML',pic:''},{av:'AV12SecFunctionalityIdAddedXml',fld:'vSECFUNCTIONALITYIDADDEDXML',pic:''},{av:'AV9SecRoleId',fld:'vSECROLEID',pic:'ZZZ9',hsh:true},{av:'A139SecRoleId',fld:'SECROLEID',pic:'ZZZ9'},{av:'AV21i',fld:'vI',pic:'ZZZZZZZZZ9'},{av:'AV11SecFunctionalityIdRemoved',fld:'vSECFUNCTIONALITYIDREMOVED',pic:''},{av:'AV15SecFunctionalityIdToFind',fld:'vSECFUNCTIONALITYIDTOFIND',pic:'ZZZZZZZZZ9'},{av:'AV10SecFunctionalityIdAdded',fld:'vSECFUNCTIONALITYIDADDED',pic:''},{av:'AV34SecRoleIdParm',fld:'vSECROLEIDPARM',pic:'ZZZ9',hsh:true},{av:'AV35GridState',fld:'vGRIDSTATE',pic:''},{av:'AV55DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV54DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''}],[{av:'AV54DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV49DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV35GridState',fld:'vGRIDSTATE',pic:''},{av:'AV44DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV45DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV46DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV47SecFunctionalityDescription2',fld:'vSECFUNCTIONALITYDESCRIPTION2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV50DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV51DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV52SecFunctionalityDescription3',fld:'vSECFUNCTIONALITYDESCRIPTION3',pic:''},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV40DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV41DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV42SecFunctionalityDescription1',fld:'vSECFUNCTIONALITYDESCRIPTION1',pic:''},{av:'AV56SecParentFunctionalityDescription1',fld:'vSECPARENTFUNCTIONALITYDESCRIPTION1',pic:''},{av:'AV43SecFunctionalityKey1',fld:'vSECFUNCTIONALITYKEY1',pic:''},{av:'gx.fn.getCtrlProperty("JSDYNAMICFILTERS","Caption")',ctrl:'JSDYNAMICFILTERS',prop:'Caption'},{av:'AV57SecParentFunctionalityDescription2',fld:'vSECPARENTFUNCTIONALITYDESCRIPTION2',pic:''},{av:'AV48SecFunctionalityKey2',fld:'vSECFUNCTIONALITYKEY2',pic:''},{av:'AV58SecParentFunctionalityDescription3',fld:'vSECPARENTFUNCTIONALITYDESCRIPTION3',pic:''},{av:'AV53SecFunctionalityKey3',fld:'vSECFUNCTIONALITYKEY3',pic:''},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYDESCRIPTION2","Visible")',ctrl:'vSECFUNCTIONALITYDESCRIPTION2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECPARENTFUNCTIONALITYDESCRIPTION2","Visible")',ctrl:'vSECPARENTFUNCTIONALITYDESCRIPTION2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYKEY2","Visible")',ctrl:'vSECFUNCTIONALITYKEY2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYDESCRIPTION3","Visible")',ctrl:'vSECFUNCTIONALITYDESCRIPTION3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECPARENTFUNCTIONALITYDESCRIPTION3","Visible")',ctrl:'vSECPARENTFUNCTIONALITYDESCRIPTION3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYKEY3","Visible")',ctrl:'vSECFUNCTIONALITYKEY3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYDESCRIPTION1","Visible")',ctrl:'vSECFUNCTIONALITYDESCRIPTION1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECPARENTFUNCTIONALITYDESCRIPTION1","Visible")',ctrl:'vSECPARENTFUNCTIONALITYDESCRIPTION1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYKEY1","Visible")',ctrl:'vSECFUNCTIONALITYKEY1',prop:'Visible'},{av:'AV81GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV82GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV11SecFunctionalityIdRemoved',fld:'vSECFUNCTIONALITYIDREMOVED',pic:''},{av:'AV10SecFunctionalityIdAdded',fld:'vSECFUNCTIONALITYIDADDED',pic:''}]];
   this.EvtParms["VDYNAMICFILTERSSELECTOR3.CLICK"] = [[{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV50DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''}],[{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV51DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYDESCRIPTION3","Visible")',ctrl:'vSECFUNCTIONALITYDESCRIPTION3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECPARENTFUNCTIONALITYDESCRIPTION3","Visible")',ctrl:'vSECPARENTFUNCTIONALITYDESCRIPTION3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYKEY3","Visible")',ctrl:'vSECFUNCTIONALITYKEY3',prop:'Visible'}]];
   this.EvtParms["'DOUAVIEWCHILDREN'"] = [[{av:'AV10SecFunctionalityIdAdded',fld:'vSECFUNCTIONALITYIDADDED',pic:''},{av:'AV11SecFunctionalityIdRemoved',fld:'vSECFUNCTIONALITYIDREMOVED',pic:''},{av:'A136SecFunctionalityId',fld:'SECFUNCTIONALITYID',pic:'ZZZZZZZZZ9',hsh:true},{av:'AV9SecRoleId',fld:'vSECROLEID',pic:'ZZZ9',hsh:true},{av:'AV13SecFunctionalityIdRemovedXml',fld:'vSECFUNCTIONALITYIDREMOVEDXML',pic:''},{av:'AV12SecFunctionalityIdAddedXml',fld:'vSECFUNCTIONALITYIDADDEDXML',pic:''},{av:'AV33SecFunctionalityId_Selected',fld:'vSECFUNCTIONALITYID_SELECTED',pic:'ZZZZZZZZZ9'}],[{av:'AV33SecFunctionalityId_Selected',fld:'vSECFUNCTIONALITYID_SELECTED',pic:'ZZZZZZZZZ9'},{av:'AV11SecFunctionalityIdRemoved',fld:'vSECFUNCTIONALITYIDREMOVED',pic:''},{av:'AV10SecFunctionalityIdAdded',fld:'vSECFUNCTIONALITYIDADDED',pic:''}]];
   this.EvtParms["DVELOP_CONFIRMPANEL_UAVIEWCHILDREN.CLOSE"] = [[{av:'this.DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer.Result',ctrl:'DVELOP_CONFIRMPANEL_UAVIEWCHILDREN',prop:'Result'},{av:'AV9SecRoleId',fld:'vSECROLEID',pic:'ZZZ9',hsh:true},{av:'AV33SecFunctionalityId_Selected',fld:'vSECFUNCTIONALITYID_SELECTED',pic:'ZZZZZZZZZ9'}],[]];
   this.EvtParms["VISASSOCIATED.CLICK"] = [[{av:'A136SecFunctionalityId',fld:'SECFUNCTIONALITYID',pic:'ZZZZZZZZZ9',hsh:true},{av:'AV18IsAssociated',fld:'vISASSOCIATED',pic:''},{av:'AV19IsAssociatedOld',fld:'vISASSOCIATEDOLD',pic:'',hsh:true},{av:'AV21i',fld:'vI',pic:'ZZZZZZZZZ9'},{av:'AV11SecFunctionalityIdRemoved',fld:'vSECFUNCTIONALITYIDREMOVED',pic:''},{av:'AV10SecFunctionalityIdAdded',fld:'vSECFUNCTIONALITYIDADDED',pic:''},{av:'AV13SecFunctionalityIdRemovedXml',fld:'vSECFUNCTIONALITYIDREMOVEDXML',pic:''},{av:'AV12SecFunctionalityIdAddedXml',fld:'vSECFUNCTIONALITYIDADDEDXML',pic:''},{av:'AV15SecFunctionalityIdToFind',fld:'vSECFUNCTIONALITYIDTOFIND',pic:'ZZZZZZZZZ9'}],[{av:'AV15SecFunctionalityIdToFind',fld:'vSECFUNCTIONALITYIDTOFIND',pic:'ZZZZZZZZZ9'},{av:'AV11SecFunctionalityIdRemoved',fld:'vSECFUNCTIONALITYIDREMOVED',pic:''},{av:'AV10SecFunctionalityIdAdded',fld:'vSECFUNCTIONALITYIDADDED',pic:''},{av:'AV21i',fld:'vI',pic:'ZZZZZZZZZ9'},{av:'AV13SecFunctionalityIdRemovedXml',fld:'vSECFUNCTIONALITYIDREMOVEDXML',pic:''},{av:'AV12SecFunctionalityIdAddedXml',fld:'vSECFUNCTIONALITYIDADDEDXML',pic:''}]];
   this.EvtParms["VALIDV_SECFUNCTIONALITYTYPE"] = [[],[]];
   this.EvtParms["VALID_SECFUNCTIONALITYID"] = [[],[]];
   this.EvtParms["VALID_SECPARENTFUNCTIONALITYID"] = [[],[]];
   this.EnterCtrl = ["BTNCONFIRM"];
   this.setVCMap("AV44DynamicFiltersEnabled2", "vDYNAMICFILTERSENABLED2", 0, "boolean", 4, 0);
   this.setVCMap("AV49DynamicFiltersEnabled3", "vDYNAMICFILTERSENABLED3", 0, "boolean", 4, 0);
   this.setVCMap("AV13SecFunctionalityIdRemovedXml", "vSECFUNCTIONALITYIDREMOVEDXML", 0, "vchar", 2097152, 0);
   this.setVCMap("AV12SecFunctionalityIdAddedXml", "vSECFUNCTIONALITYIDADDEDXML", 0, "vchar", 2097152, 0);
   this.setVCMap("AV38OrderedBy", "vORDEREDBY", 0, "int", 4, 0);
   this.setVCMap("AV39OrderedDsc", "vORDEREDDSC", 0, "boolean", 4, 0);
   this.setVCMap("AV9SecRoleId", "vSECROLEID", 0, "int", 4, 0);
   this.setVCMap("A139SecRoleId", "SECROLEID", 0, "int", 4, 0);
   this.setVCMap("AV21i", "vI", 0, "int", 10, 0);
   this.setVCMap("AV11SecFunctionalityIdRemoved", "vSECFUNCTIONALITYIDREMOVED", 0, "Collint", 0, 0);
   this.setVCMap("AV15SecFunctionalityIdToFind", "vSECFUNCTIONALITYIDTOFIND", 0, "int", 10, 0);
   this.setVCMap("AV10SecFunctionalityIdAdded", "vSECFUNCTIONALITYIDADDED", 0, "Collint", 0, 0);
   this.setVCMap("AV34SecRoleIdParm", "vSECROLEIDPARM", 0, "int", 4, 0);
   this.setVCMap("AV16SecFunctionalityRole", "vSECFUNCTIONALITYROLE", 0, "WWPBaseObjects\SecFunctionalityRole", 0, 0);
   this.setVCMap("AV35GridState", "vGRIDSTATE", 0, "WWPBaseObjects\WWPGridState", 0, 0);
   this.setVCMap("AV55DynamicFiltersIgnoreFirst", "vDYNAMICFILTERSIGNOREFIRST", 0, "boolean", 4, 0);
   this.setVCMap("AV54DynamicFiltersRemoving", "vDYNAMICFILTERSREMOVING", 0, "boolean", 4, 0);
   this.setVCMap("AV33SecFunctionalityId_Selected", "vSECFUNCTIONALITYID_SELECTED", 0, "int", 10, 0);
   this.setVCMap("AV44DynamicFiltersEnabled2", "vDYNAMICFILTERSENABLED2", 0, "boolean", 4, 0);
   this.setVCMap("AV49DynamicFiltersEnabled3", "vDYNAMICFILTERSENABLED3", 0, "boolean", 4, 0);
   this.setVCMap("AV13SecFunctionalityIdRemovedXml", "vSECFUNCTIONALITYIDREMOVEDXML", 0, "vchar", 2097152, 0);
   this.setVCMap("AV12SecFunctionalityIdAddedXml", "vSECFUNCTIONALITYIDADDEDXML", 0, "vchar", 2097152, 0);
   this.setVCMap("AV9SecRoleId", "vSECROLEID", 0, "int", 4, 0);
   this.setVCMap("A139SecRoleId", "SECROLEID", 0, "int", 4, 0);
   this.setVCMap("AV21i", "vI", 0, "int", 10, 0);
   this.setVCMap("AV11SecFunctionalityIdRemoved", "vSECFUNCTIONALITYIDREMOVED", 0, "Collint", 0, 0);
   this.setVCMap("AV15SecFunctionalityIdToFind", "vSECFUNCTIONALITYIDTOFIND", 0, "int", 10, 0);
   this.setVCMap("AV10SecFunctionalityIdAdded", "vSECFUNCTIONALITYIDADDED", 0, "Collint", 0, 0);
   this.setVCMap("AV34SecRoleIdParm", "vSECROLEIDPARM", 0, "int", 4, 0);
   this.setVCMap("AV9SecRoleId", "vSECROLEID", 0, "int", 4, 0);
   this.setVCMap("AV33SecFunctionalityId_Selected", "vSECFUNCTIONALITYID_SELECTED", 0, "int", 10, 0);
   this.setVCMap("AV44DynamicFiltersEnabled2", "vDYNAMICFILTERSENABLED2", 0, "boolean", 4, 0);
   this.setVCMap("AV49DynamicFiltersEnabled3", "vDYNAMICFILTERSENABLED3", 0, "boolean", 4, 0);
   this.setVCMap("AV13SecFunctionalityIdRemovedXml", "vSECFUNCTIONALITYIDREMOVEDXML", 0, "vchar", 2097152, 0);
   this.setVCMap("AV12SecFunctionalityIdAddedXml", "vSECFUNCTIONALITYIDADDEDXML", 0, "vchar", 2097152, 0);
   this.setVCMap("AV9SecRoleId", "vSECROLEID", 0, "int", 4, 0);
   this.setVCMap("A139SecRoleId", "SECROLEID", 0, "int", 4, 0);
   this.setVCMap("AV21i", "vI", 0, "int", 10, 0);
   this.setVCMap("AV11SecFunctionalityIdRemoved", "vSECFUNCTIONALITYIDREMOVED", 0, "Collint", 0, 0);
   this.setVCMap("AV15SecFunctionalityIdToFind", "vSECFUNCTIONALITYIDTOFIND", 0, "int", 10, 0);
   this.setVCMap("AV10SecFunctionalityIdAdded", "vSECFUNCTIONALITYIDADDED", 0, "Collint", 0, 0);
   this.setVCMap("AV34SecRoleIdParm", "vSECROLEIDPARM", 0, "int", 4, 0);
   GridContainer.addRefreshingVar(this.GXValidFnc[28]);
   GridContainer.addRefreshingVar(this.GXValidFnc[36]);
   GridContainer.addRefreshingVar(this.GXValidFnc[44]);
   GridContainer.addRefreshingVar(this.GXValidFnc[47]);
   GridContainer.addRefreshingVar(this.GXValidFnc[50]);
   GridContainer.addRefreshingVar(this.GXValidFnc[53]);
   GridContainer.addRefreshingVar(this.GXValidFnc[66]);
   GridContainer.addRefreshingVar(this.GXValidFnc[74]);
   GridContainer.addRefreshingVar(this.GXValidFnc[77]);
   GridContainer.addRefreshingVar(this.GXValidFnc[80]);
   GridContainer.addRefreshingVar(this.GXValidFnc[83]);
   GridContainer.addRefreshingVar(this.GXValidFnc[96]);
   GridContainer.addRefreshingVar(this.GXValidFnc[104]);
   GridContainer.addRefreshingVar(this.GXValidFnc[107]);
   GridContainer.addRefreshingVar(this.GXValidFnc[110]);
   GridContainer.addRefreshingVar(this.GXValidFnc[113]);
   GridContainer.addRefreshingVar({rfrVar:"AV44DynamicFiltersEnabled2"});
   GridContainer.addRefreshingVar({rfrVar:"AV49DynamicFiltersEnabled3"});
   GridContainer.addRefreshingVar({rfrVar:"AV13SecFunctionalityIdRemovedXml"});
   GridContainer.addRefreshingVar({rfrVar:"AV12SecFunctionalityIdAddedXml"});
   GridContainer.addRefreshingVar({rfrVar:"AV9SecRoleId"});
   GridContainer.addRefreshingVar({rfrVar:"A139SecRoleId"});
   GridContainer.addRefreshingVar({rfrVar:"AV21i"});
   GridContainer.addRefreshingVar({rfrVar:"AV11SecFunctionalityIdRemoved"});
   GridContainer.addRefreshingVar({rfrVar:"AV15SecFunctionalityIdToFind"});
   GridContainer.addRefreshingVar({rfrVar:"AV10SecFunctionalityIdAdded"});
   GridContainer.addRefreshingVar({rfrVar:"AV34SecRoleIdParm"});
   GridContainer.addRefreshingParm(this.GXValidFnc[28]);
   GridContainer.addRefreshingParm(this.GXValidFnc[36]);
   GridContainer.addRefreshingParm(this.GXValidFnc[44]);
   GridContainer.addRefreshingParm(this.GXValidFnc[47]);
   GridContainer.addRefreshingParm(this.GXValidFnc[50]);
   GridContainer.addRefreshingParm(this.GXValidFnc[53]);
   GridContainer.addRefreshingParm(this.GXValidFnc[66]);
   GridContainer.addRefreshingParm(this.GXValidFnc[74]);
   GridContainer.addRefreshingParm(this.GXValidFnc[77]);
   GridContainer.addRefreshingParm(this.GXValidFnc[80]);
   GridContainer.addRefreshingParm(this.GXValidFnc[83]);
   GridContainer.addRefreshingParm(this.GXValidFnc[96]);
   GridContainer.addRefreshingParm(this.GXValidFnc[104]);
   GridContainer.addRefreshingParm(this.GXValidFnc[107]);
   GridContainer.addRefreshingParm(this.GXValidFnc[110]);
   GridContainer.addRefreshingParm(this.GXValidFnc[113]);
   GridContainer.addRefreshingParm({rfrVar:"AV44DynamicFiltersEnabled2"});
   GridContainer.addRefreshingParm({rfrVar:"AV49DynamicFiltersEnabled3"});
   GridContainer.addRefreshingParm({rfrVar:"AV13SecFunctionalityIdRemovedXml"});
   GridContainer.addRefreshingParm({rfrVar:"AV12SecFunctionalityIdAddedXml"});
   GridContainer.addRefreshingParm({rfrVar:"AV9SecRoleId"});
   GridContainer.addRefreshingParm({rfrVar:"A139SecRoleId"});
   GridContainer.addRefreshingParm({rfrVar:"AV21i"});
   GridContainer.addRefreshingParm({rfrVar:"AV11SecFunctionalityIdRemoved"});
   GridContainer.addRefreshingParm({rfrVar:"AV15SecFunctionalityIdToFind"});
   GridContainer.addRefreshingParm({rfrVar:"AV10SecFunctionalityIdAdded"});
   GridContainer.addRefreshingParm({rfrVar:"AV34SecRoleIdParm"});
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(wwpbaseobjects.secrolefunroleassociationww);});
