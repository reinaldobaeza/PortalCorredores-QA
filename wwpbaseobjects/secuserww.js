/*!   GeneXus C# 16_0_10-142546 on 4/20/2021 0:0:13.5
*/
gx.evt.autoSkip = false;
gx.define('wwpbaseobjects.secuserww', false, function () {
   this.ServerClass =  "wwpbaseobjects.secuserww" ;
   this.PackageName =  "GeneXus.Programs" ;
   this.setObjectType("web");
   this.anyGridBaseTable = true;
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.autoRefresh = true;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
      this.AV40ManageFiltersExecutionStep=gx.fn.getIntegerValue("vMANAGEFILTERSEXECUTIONSTEP",'.') ;
      this.AV28DynamicFiltersEnabled2=gx.fn.getControlValue("vDYNAMICFILTERSENABLED2") ;
      this.AV32DynamicFiltersEnabled3=gx.fn.getControlValue("vDYNAMICFILTERSENABLED3") ;
      this.AV70ColumnsSelector=gx.fn.getControlValue("vCOLUMNSSELECTOR") ;
      this.AV51TFSecUserName=gx.fn.getControlValue("vTFSECUSERNAME") ;
      this.AV52TFSecUserName_Sel=gx.fn.getControlValue("vTFSECUSERNAME_SEL") ;
      this.AV84TFSecUserDescripcion=gx.fn.getControlValue("vTFSECUSERDESCRIPCION") ;
      this.AV85TFSecUserDescripcion_Sel=gx.fn.getControlValue("vTFSECUSERDESCRIPCION_SEL") ;
      this.AV99TFSecUserCargaPolizas_Sel=gx.fn.getIntegerValue("vTFSECUSERCARGAPOLIZAS_SEL",'.') ;
      this.AV101TFSecUserMail=gx.fn.getControlValue("vTFSECUSERMAIL") ;
      this.AV102TFSecUserMail_Sel=gx.fn.getControlValue("vTFSECUSERMAIL_SEL") ;
      this.AV103TFSecUserKey=gx.fn.getControlValue("vTFSECUSERKEY") ;
      this.AV104TFSecUserKey_Sel=gx.fn.getControlValue("vTFSECUSERKEY_SEL") ;
      this.AV105TFSecUserToken=gx.fn.getControlValue("vTFSECUSERTOKEN") ;
      this.AV106TFSecUserToken_Sel=gx.fn.getControlValue("vTFSECUSERTOKEN_SEL") ;
      this.AV107TFSecUserTokenFecha=gx.fn.getDateTimeValue("vTFSECUSERTOKENFECHA") ;
      this.AV108TFSecUserTokenFecha_To=gx.fn.getDateTimeValue("vTFSECUSERTOKENFECHA_TO") ;
      this.AV142Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV23OrderedBy=gx.fn.getIntegerValue("vORDEREDBY",'.') ;
      this.AV24OrderedDsc=gx.fn.getControlValue("vORDEREDDSC") ;
      this.AV20GridState=gx.fn.getControlValue("vGRIDSTATE") ;
      this.AV37DynamicFiltersIgnoreFirst=gx.fn.getControlValue("vDYNAMICFILTERSIGNOREFIRST") ;
      this.AV36DynamicFiltersRemoving=gx.fn.getControlValue("vDYNAMICFILTERSREMOVING") ;
      this.AV17IsAuthorized_Update=gx.fn.getControlValue("vISAUTHORIZED_UPDATE") ;
      this.AV18IsAuthorized_Delete=gx.fn.getControlValue("vISAUTHORIZED_DELETE") ;
      this.AV16IsAuthorized_UAAssociateRoles=gx.fn.getControlValue("vISAUTHORIZED_UAASSOCIATEROLES") ;
      this.AV95IsAuthorized_AsociarCorredor=gx.fn.getControlValue("vISAUTHORIZED_ASOCIARCORREDOR") ;
      this.AV40ManageFiltersExecutionStep=gx.fn.getIntegerValue("vMANAGEFILTERSEXECUTIONSTEP",'.') ;
      this.AV28DynamicFiltersEnabled2=gx.fn.getControlValue("vDYNAMICFILTERSENABLED2") ;
      this.AV32DynamicFiltersEnabled3=gx.fn.getControlValue("vDYNAMICFILTERSENABLED3") ;
      this.AV70ColumnsSelector=gx.fn.getControlValue("vCOLUMNSSELECTOR") ;
      this.AV51TFSecUserName=gx.fn.getControlValue("vTFSECUSERNAME") ;
      this.AV52TFSecUserName_Sel=gx.fn.getControlValue("vTFSECUSERNAME_SEL") ;
      this.AV84TFSecUserDescripcion=gx.fn.getControlValue("vTFSECUSERDESCRIPCION") ;
      this.AV85TFSecUserDescripcion_Sel=gx.fn.getControlValue("vTFSECUSERDESCRIPCION_SEL") ;
      this.AV99TFSecUserCargaPolizas_Sel=gx.fn.getIntegerValue("vTFSECUSERCARGAPOLIZAS_SEL",'.') ;
      this.AV101TFSecUserMail=gx.fn.getControlValue("vTFSECUSERMAIL") ;
      this.AV102TFSecUserMail_Sel=gx.fn.getControlValue("vTFSECUSERMAIL_SEL") ;
      this.AV103TFSecUserKey=gx.fn.getControlValue("vTFSECUSERKEY") ;
      this.AV104TFSecUserKey_Sel=gx.fn.getControlValue("vTFSECUSERKEY_SEL") ;
      this.AV105TFSecUserToken=gx.fn.getControlValue("vTFSECUSERTOKEN") ;
      this.AV106TFSecUserToken_Sel=gx.fn.getControlValue("vTFSECUSERTOKEN_SEL") ;
      this.AV107TFSecUserTokenFecha=gx.fn.getDateTimeValue("vTFSECUSERTOKENFECHA") ;
      this.AV108TFSecUserTokenFecha_To=gx.fn.getDateTimeValue("vTFSECUSERTOKENFECHA_TO") ;
      this.AV142Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV23OrderedBy=gx.fn.getIntegerValue("vORDEREDBY",'.') ;
      this.AV24OrderedDsc=gx.fn.getControlValue("vORDEREDDSC") ;
      this.AV20GridState=gx.fn.getControlValue("vGRIDSTATE") ;
      this.AV37DynamicFiltersIgnoreFirst=gx.fn.getControlValue("vDYNAMICFILTERSIGNOREFIRST") ;
      this.AV36DynamicFiltersRemoving=gx.fn.getControlValue("vDYNAMICFILTERSREMOVING") ;
      this.AV17IsAuthorized_Update=gx.fn.getControlValue("vISAUTHORIZED_UPDATE") ;
      this.AV18IsAuthorized_Delete=gx.fn.getControlValue("vISAUTHORIZED_DELETE") ;
      this.AV16IsAuthorized_UAAssociateRoles=gx.fn.getControlValue("vISAUTHORIZED_UAASSOCIATEROLES") ;
      this.AV95IsAuthorized_AsociarCorredor=gx.fn.getControlValue("vISAUTHORIZED_ASOCIARCORREDOR") ;
   };
   this.Validv_Ddo_secusertokenfechaauxdate=function()
   {
      return this.validCliEvt("Validv_Ddo_secusertokenfechaauxdate", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("vDDO_SECUSERTOKENFECHAAUXDATE");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.AV109DDO_SecUserTokenFechaAuxDate)===0) || new gx.date.gxdate( this.AV109DDO_SecUserTokenFechaAuxDate ).compare( gx.date.ymdtod( 1753, 1, 1) ) >= 0 ) )
         {
            try {
               gxballoon.setError("Campo DDO_Sec User Token Fecha Aux Date fuera de rango");
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
   this.Validv_Ddo_secusertokenfechaauxdateto=function()
   {
      return this.validCliEvt("Validv_Ddo_secusertokenfechaauxdateto", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("vDDO_SECUSERTOKENFECHAAUXDATETO");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.AV110DDO_SecUserTokenFechaAuxDateTo)===0) || new gx.date.gxdate( this.AV110DDO_SecUserTokenFechaAuxDateTo ).compare( gx.date.ymdtod( 1753, 1, 1) ) >= 0 ) )
         {
            try {
               gxballoon.setError("Campo DDO_Sec User Token Fecha Aux Date To fuera de rango");
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
   this.s122_client=function()
   {
      gx.fn.setCtrlProperty("vSECUSERNAME1","Visible", false );
      gx.fn.setCtrlProperty("vSECUSERDESCRIPCION1","Visible", false );
      gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR1","Visible", false );
      if ( this.AV25DynamicFiltersSelector1 == "SECUSERNAME" )
      {
         gx.fn.setCtrlProperty("vSECUSERNAME1","Visible", true );
         gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR1","Visible", true );
      }
      else if ( this.AV25DynamicFiltersSelector1 == "SECUSERDESCRIPCION" )
      {
         gx.fn.setCtrlProperty("vSECUSERDESCRIPCION1","Visible", true );
         gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR1","Visible", true );
      }
   };
   this.s132_client=function()
   {
      gx.fn.setCtrlProperty("vSECUSERNAME2","Visible", false );
      gx.fn.setCtrlProperty("vSECUSERDESCRIPCION2","Visible", false );
      gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR2","Visible", false );
      if ( this.AV29DynamicFiltersSelector2 == "SECUSERNAME" )
      {
         gx.fn.setCtrlProperty("vSECUSERNAME2","Visible", true );
         gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR2","Visible", true );
      }
      else if ( this.AV29DynamicFiltersSelector2 == "SECUSERDESCRIPCION" )
      {
         gx.fn.setCtrlProperty("vSECUSERDESCRIPCION2","Visible", true );
         gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR2","Visible", true );
      }
   };
   this.s142_client=function()
   {
      gx.fn.setCtrlProperty("vSECUSERNAME3","Visible", false );
      gx.fn.setCtrlProperty("vSECUSERDESCRIPCION3","Visible", false );
      gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR3","Visible", false );
      if ( this.AV33DynamicFiltersSelector3 == "SECUSERNAME" )
      {
         gx.fn.setCtrlProperty("vSECUSERNAME3","Visible", true );
         gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR3","Visible", true );
      }
      else if ( this.AV33DynamicFiltersSelector3 == "SECUSERDESCRIPCION" )
      {
         gx.fn.setCtrlProperty("vSECUSERDESCRIPCION3","Visible", true );
         gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR3","Visible", true );
      }
   };
   this.s172_client=function()
   {
      this.DDO_GRIDContainer.SortedStatus =  gx.text.trim( gx.num.str( this.AV23OrderedBy, 4, 0))+":"+(this.AV24OrderedDsc ? "DSC" : "ASC")  ;
   };
   this.s212_client=function()
   {
      if ( ! this.AV37DynamicFiltersIgnoreFirst )
      {
         this.AV22GridStateDynamicFilter =  {Selected:"",Value:"",Operator:0,ValueTo:""}  ;
         this.AV22GridStateDynamicFilter.Selected =  this.AV25DynamicFiltersSelector1  ;
         if ( ( this.AV25DynamicFiltersSelector1 == "SECUSERNAME" ) && ! ((''==this.AV27SecUserName1)) )
         {
            this.AV22GridStateDynamicFilter.Value =  this.AV27SecUserName1  ;
            this.AV22GridStateDynamicFilter.Operator = gx.num.trunc( this.AV26DynamicFiltersOperator1 ,0) ;
         }
         else if ( ( this.AV25DynamicFiltersSelector1 == "SECUSERDESCRIPCION" ) && ! ((''==this.AV91SecUserDescripcion1)) )
         {
            this.AV22GridStateDynamicFilter.Value =  this.AV91SecUserDescripcion1  ;
            this.AV22GridStateDynamicFilter.Operator = gx.num.trunc( this.AV26DynamicFiltersOperator1 ,0) ;
         }
         if ( this.AV36DynamicFiltersRemoving || ! ((''==this.AV22GridStateDynamicFilter.Value)) )
         {
            this.AV20GridState.DynamicFilters.push(this.AV22GridStateDynamicFilter) ;
         }
      }
      if ( this.AV28DynamicFiltersEnabled2 )
      {
         this.AV22GridStateDynamicFilter =  {Selected:"",Value:"",Operator:0,ValueTo:""}  ;
         this.AV22GridStateDynamicFilter.Selected =  this.AV29DynamicFiltersSelector2  ;
         if ( ( this.AV29DynamicFiltersSelector2 == "SECUSERNAME" ) && ! ((''==this.AV31SecUserName2)) )
         {
            this.AV22GridStateDynamicFilter.Value =  this.AV31SecUserName2  ;
            this.AV22GridStateDynamicFilter.Operator = gx.num.trunc( this.AV30DynamicFiltersOperator2 ,0) ;
         }
         else if ( ( this.AV29DynamicFiltersSelector2 == "SECUSERDESCRIPCION" ) && ! ((''==this.AV92SecUserDescripcion2)) )
         {
            this.AV22GridStateDynamicFilter.Value =  this.AV92SecUserDescripcion2  ;
            this.AV22GridStateDynamicFilter.Operator = gx.num.trunc( this.AV30DynamicFiltersOperator2 ,0) ;
         }
         if ( this.AV36DynamicFiltersRemoving || ! ((''==this.AV22GridStateDynamicFilter.Value)) )
         {
            this.AV20GridState.DynamicFilters.push(this.AV22GridStateDynamicFilter) ;
         }
      }
      if ( this.AV32DynamicFiltersEnabled3 )
      {
         this.AV22GridStateDynamicFilter =  {Selected:"",Value:"",Operator:0,ValueTo:""}  ;
         this.AV22GridStateDynamicFilter.Selected =  this.AV33DynamicFiltersSelector3  ;
         if ( ( this.AV33DynamicFiltersSelector3 == "SECUSERNAME" ) && ! ((''==this.AV35SecUserName3)) )
         {
            this.AV22GridStateDynamicFilter.Value =  this.AV35SecUserName3  ;
            this.AV22GridStateDynamicFilter.Operator = gx.num.trunc( this.AV34DynamicFiltersOperator3 ,0) ;
         }
         else if ( ( this.AV33DynamicFiltersSelector3 == "SECUSERDESCRIPCION" ) && ! ((''==this.AV93SecUserDescripcion3)) )
         {
            this.AV22GridStateDynamicFilter.Value =  this.AV93SecUserDescripcion3  ;
            this.AV22GridStateDynamicFilter.Operator = gx.num.trunc( this.AV34DynamicFiltersOperator3 ,0) ;
         }
         if ( this.AV36DynamicFiltersRemoving || ! ((''==this.AV22GridStateDynamicFilter.Value)) )
         {
            this.AV20GridState.DynamicFilters.push(this.AV22GridStateDynamicFilter) ;
         }
      }
   };
   this.s222_client=function()
   {
      this.AV28DynamicFiltersEnabled2 =  false  ;
      this.AV29DynamicFiltersSelector2 =  "SECUSERNAME"  ;
      this.AV30DynamicFiltersOperator2 = gx.num.trunc( 0 ,0) ;
      this.AV31SecUserName2 =  ''  ;
      this.s132_client();
      this.AV32DynamicFiltersEnabled3 =  false  ;
      this.AV33DynamicFiltersSelector3 =  "SECUSERNAME"  ;
      this.AV34DynamicFiltersOperator3 = gx.num.trunc( 0 ,0) ;
      this.AV35SecUserName3 =  ''  ;
      this.s142_client();
   };
   this.e122t2_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE", false, null, true, true);
   };
   this.e132t2_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", false, null, true, true);
   };
   this.e142t2_client=function()
   {
      return this.executeServerEvent("DDO_GRID.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e152t2_client=function()
   {
      return this.executeServerEvent("DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED", false, null, true, true);
   };
   this.e162t2_client=function()
   {
      return this.executeServerEvent("'REMOVEDYNAMICFILTERS1'", true, null, false, false);
   };
   this.e172t2_client=function()
   {
      return this.executeServerEvent("'REMOVEDYNAMICFILTERS2'", true, null, false, false);
   };
   this.e182t2_client=function()
   {
      return this.executeServerEvent("'REMOVEDYNAMICFILTERS3'", true, null, false, false);
   };
   this.e112t2_client=function()
   {
      return this.executeServerEvent("DDO_MANAGEFILTERS.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e192t2_client=function()
   {
      return this.executeServerEvent("'DOINSERT'", false, null, false, false);
   };
   this.e202t2_client=function()
   {
      return this.executeServerEvent("'DOEXPORT'", false, null, false, false);
   };
   this.e212t2_client=function()
   {
      return this.executeServerEvent("'DOEXPORTREPORT'", false, null, false, false);
   };
   this.e222t2_client=function()
   {
      return this.executeServerEvent("'ADDDYNAMICFILTERS1'", true, null, false, false);
   };
   this.e232t2_client=function()
   {
      return this.executeServerEvent("VDYNAMICFILTERSSELECTOR1.CLICK", true, null, false, true);
   };
   this.e242t2_client=function()
   {
      return this.executeServerEvent("'ADDDYNAMICFILTERS2'", true, null, false, false);
   };
   this.e252t2_client=function()
   {
      return this.executeServerEvent("VDYNAMICFILTERSSELECTOR2.CLICK", true, null, false, true);
   };
   this.e262t2_client=function()
   {
      return this.executeServerEvent("VDYNAMICFILTERSSELECTOR3.CLICK", true, null, false, true);
   };
   this.e302t2_client=function()
   {
      return this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e312t2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,30,33,36,38,39,41,43,46,47,49,50,52,53,55,58,60,63,65,66,68,70,73,74,76,77,79,80,82,85,87,90,92,93,95,97,100,101,103,104,106,107,109,112,113,114,116,117,118,119,120,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,139,140,141,142,146,147,148];
   this.GXLastCtrlId =148;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",121,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"wwpbaseobjects.secuserww",[],false,1,false,true,0,false,false,false,"",0,"px",0,"px","Nueva fila",true,false,false,null,null,false,"",false,[1,1,1,1],false,0,true,false);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Display",122,"vDISPLAY","","Visualizar","Display","char",0,"px",20,20,"left",null,[],"Display","Display",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit("Update",123,"vUPDATE","","Modificar","Update","char",0,"px",20,20,"left",null,[],"Update","Update",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit("Delete",124,"vDELETE","","Eliminar","Delete","char",0,"px",20,20,"left",null,[],"Delete","Delete",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addBitmap("&Uaassociateroles","vUAASSOCIATEROLES",125,0,"px",17,"px",null,"","","ActionBaseColorAttribute","WWActionColumn");
   GridContainer.addBitmap("&Asociarcorredor","vASOCIARCORREDOR",126,0,"px",17,"px",null,"","","ActionBaseColorAttribute","WWActionColumn");
   GridContainer.addSingleLineEdit(141,127,"SECUSERID","Id","","SecUserId","int",0,"px",4,4,"right",null,[],141,"SecUserId",false,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(149,128,"SECUSERNAME","Name","","SecUserName","svchar",0,"px",100,80,"left",null,[],149,"SecUserName",true,0,false,false,"Attribute",1,"WWColumn");
   GridContainer.addSingleLineEdit(151,129,"SECUSERDESCRIPCION","Descripción","","SecUserDescripcion","svchar",0,"px",100,80,"left",null,[],151,"SecUserDescripcion",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(152,130,"SECUSERPADRE","Padre","","SecUserPadre","int",0,"px",4,4,"right",null,[],152,"SecUserPadre",false,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addCheckBox(166,131,"SECUSERCARGAPOLIZAS","Carga Pólizas","","SecUserCargaPolizas","boolean","true","false",null,true,false,0,"px","WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(216,132,"SECUSERMAIL","User Mail","","SecUserMail","svchar",0,"px",100,80,"left",null,[],216,"SecUserMail",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(217,133,"SECUSERKEY","User Key","","SecUserKey","svchar",0,"px",400,80,"left",null,[],217,"SecUserKey",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(218,134,"SECUSERTOKEN","User Token","","SecUserToken","svchar",0,"px",400,80,"left",null,[],218,"SecUserToken",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(219,135,"SECUSERTOKENFECHA","Token Fecha","","SecUserTokenFecha","dtime",0,"px",24,23,"right",null,[],219,"SecUserTokenFecha",true,12,false,false,"Attribute",1,"WWColumn hidden-xs");
   this.GridContainer.emptyText = "";
   this.setGrid(GridContainer);
   this.GRIDPAGINATIONBARContainer = gx.uc.getNew(this, 138, 39, "DVelop_DVPaginationBar", "GRIDPAGINATIONBARContainer", "Gridpaginationbar", "GRIDPAGINATIONBAR");
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
   GRIDPAGINATIONBARContainer.addV2CFunction('AV79GridCurrentPage', "vGRIDCURRENTPAGE", 'SetCurrentPage');
   GRIDPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV79GridCurrentPage=UC.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",UC.ParentObject.AV79GridCurrentPage); });
   GRIDPAGINATIONBARContainer.addV2CFunction('AV80GridPageCount', "vGRIDPAGECOUNT", 'SetPageCount');
   GRIDPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV80GridPageCount=UC.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",UC.ParentObject.AV80GridPageCount); });
   GRIDPAGINATIONBARContainer.setProp("RecordCount", "Recordcount", '', "str");
   GRIDPAGINATIONBARContainer.setProp("Page", "Page", '', "str");
   GRIDPAGINATIONBARContainer.setProp("Visible", "Visible", true, "bool");
   GRIDPAGINATIONBARContainer.setProp("Gx Control Type", "Gxcontroltype", '', "int");
   GRIDPAGINATIONBARContainer.setC2ShowFunction(function(UC) { UC.show(); });
   GRIDPAGINATIONBARContainer.addEventHandler("ChangePage", this.e122t2_client);
   GRIDPAGINATIONBARContainer.addEventHandler("ChangeRowsPerPage", this.e132t2_client);
   this.setUserControl(GRIDPAGINATIONBARContainer);
   this.DDO_GRIDContainer = gx.uc.getNew(this, 143, 39, "DDOGridTitleSettingsM", "DDO_GRIDContainer", "Ddo_grid", "DDO_GRID");
   var DDO_GRIDContainer = this.DDO_GRIDContainer;
   DDO_GRIDContainer.setProp("Class", "Class", "", "char");
   DDO_GRIDContainer.setProp("Enabled", "Enabled", true, "boolean");
   DDO_GRIDContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_GRIDContainer.setProp("Icon", "Icon", "", "str");
   DDO_GRIDContainer.setProp("Caption", "Caption", "", "str");
   DDO_GRIDContainer.setProp("Tooltip", "Tooltip", "", "str");
   DDO_GRIDContainer.setProp("Cls", "Cls", "", "str");
   DDO_GRIDContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_GRIDContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_GRIDContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_GRIDContainer.setDynProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_GRIDContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_GRIDContainer.setDynProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_GRIDContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_GRIDContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_GRIDContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_GRIDContainer.setProp("SelectedColumn", "Selectedcolumn", "", "char");
   DDO_GRIDContainer.setProp("SelectedColumnFixedFilter", "Selectedcolumnfixedfilter", "", "char");
   DDO_GRIDContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_GRIDContainer.setProp("TitleControlAlign", "Titlecontrolalign", "", "str");
   DDO_GRIDContainer.setProp("Visible", "Visible", "", "str");
   DDO_GRIDContainer.setDynProp("GridInternalName", "Gridinternalname", "", "str");
   DDO_GRIDContainer.setProp("ColumnIds", "Columnids", "6:SecUserName|7:SecUserDescripcion|9:SecUserCargaPolizas|10:SecUserMail|11:SecUserKey|12:SecUserToken|13:SecUserTokenFecha", "str");
   DDO_GRIDContainer.setProp("ColumnsSortValues", "Columnssortvalues", "1|2|3|4|5|6|7", "str");
   DDO_GRIDContainer.setProp("IncludeSortASC", "Includesortasc", "T", "str");
   DDO_GRIDContainer.setProp("IncludeSortDSC", "Includesortdsc", "", "str");
   DDO_GRIDContainer.setProp("AllowGroup", "Allowgroup", "", "str");
   DDO_GRIDContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_GRIDContainer.setProp("IncludeFilter", "Includefilter", "T|T||T|T|T|T", "str");
   DDO_GRIDContainer.setProp("FilterType", "Filtertype", "Character|Character||Character|Character|Character|Date", "str");
   DDO_GRIDContainer.setProp("FilterIsRange", "Filterisrange", "||||||T", "str");
   DDO_GRIDContainer.setProp("IncludeDataList", "Includedatalist", "T|T|T|T|T|T|", "str");
   DDO_GRIDContainer.setProp("DataListType", "Datalisttype", "Dynamic|Dynamic|FixedValues|Dynamic|Dynamic|Dynamic|", "str");
   DDO_GRIDContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", "", "str");
   DDO_GRIDContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "||1:WWP_TSChecked,2:WWP_TSUnChecked||||", "str");
   DDO_GRIDContainer.setProp("DataListProc", "Datalistproc", "WWPBaseObjects.SecUserWWGetFilterData", "str");
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
   DDO_GRIDContainer.addV2CFunction('AV54DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_GRIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV54DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV54DDO_TitleSettingsIcons); });
   DDO_GRIDContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_GRIDContainer.addEventHandler("OnOptionClicked", this.e142t2_client);
   this.setUserControl(DDO_GRIDContainer);
   this.INNEWWINDOW1Container = gx.uc.getNew(this, 144, 39, "InNewWindow", "INNEWWINDOW1Container", "Innewwindow1", "INNEWWINDOW1");
   var INNEWWINDOW1Container = this.INNEWWINDOW1Container;
   INNEWWINDOW1Container.setProp("Class", "Class", "", "char");
   INNEWWINDOW1Container.setProp("Enabled", "Enabled", true, "boolean");
   INNEWWINDOW1Container.setDynProp("Width", "Width", "50", "str");
   INNEWWINDOW1Container.setDynProp("Height", "Height", "50", "str");
   INNEWWINDOW1Container.setProp("Name", "Name", "", "str");
   INNEWWINDOW1Container.setDynProp("Target", "Target", "", "str");
   INNEWWINDOW1Container.setProp("Fullscreen", "Fullscreen", false, "bool");
   INNEWWINDOW1Container.setProp("Location", "Location", true, "bool");
   INNEWWINDOW1Container.setProp("MenuBar", "Menubar", true, "bool");
   INNEWWINDOW1Container.setProp("Resizable", "Resizable", true, "bool");
   INNEWWINDOW1Container.setProp("Scrollbars", "Scrollbars", true, "bool");
   INNEWWINDOW1Container.setProp("TitleBar", "Titlebar", true, "bool");
   INNEWWINDOW1Container.setProp("ToolBar", "Toolbar", true, "bool");
   INNEWWINDOW1Container.setProp("directories", "Directories", true, "bool");
   INNEWWINDOW1Container.setProp("status", "Status", true, "bool");
   INNEWWINDOW1Container.setProp("copyhistory", "Copyhistory", true, "bool");
   INNEWWINDOW1Container.setProp("top", "Top", "5", "str");
   INNEWWINDOW1Container.setProp("left", "Left", "5", "str");
   INNEWWINDOW1Container.setProp("fitscreen", "Fitscreen", false, "bool");
   INNEWWINDOW1Container.setProp("RefreshParentOnClose", "Refreshparentonclose", false, "bool");
   INNEWWINDOW1Container.setProp("Targets", "Targets", '', "str");
   INNEWWINDOW1Container.setProp("Visible", "Visible", true, "bool");
   INNEWWINDOW1Container.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(INNEWWINDOW1Container);
   this.DDO_GRIDCOLUMNSSELECTORContainer = gx.uc.getNew(this, 145, 39, "BootstrapDropDownOptions", "DDO_GRIDCOLUMNSSELECTORContainer", "Ddo_gridcolumnsselector", "DDO_GRIDCOLUMNSSELECTOR");
   var DDO_GRIDCOLUMNSSELECTORContainer = this.DDO_GRIDCOLUMNSSELECTORContainer;
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("Class", "Class", "", "char");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("Enabled", "Enabled", true, "boolean");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("Icon", "Icon", "", "str");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("Caption", "Caption", "Selecciona columnas", "str");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("Tooltip", "Tooltip", "WWP_EditColumnsTooltip", "str");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("Cls", "Cls", "ColumnsSelector hidden-xs", "str");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridColumnsSelector", "str");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("Visible", "Visible", true, "bool");
   DDO_GRIDCOLUMNSSELECTORContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("UpdateButtonText", "Updatebuttontext", "WWP_ColumnsSelectorButton", "str");
   DDO_GRIDCOLUMNSSELECTORContainer.addV2CFunction('AV54DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_GRIDCOLUMNSSELECTORContainer.addC2VFunction(function(UC) { UC.ParentObject.AV54DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV54DDO_TitleSettingsIcons); });
   DDO_GRIDCOLUMNSSELECTORContainer.addV2CFunction('AV70ColumnsSelector', "vCOLUMNSSELECTOR", 'SetDropDownOptionsData');
   DDO_GRIDCOLUMNSSELECTORContainer.addC2VFunction(function(UC) { UC.ParentObject.AV70ColumnsSelector=UC.GetDropDownOptionsData();gx.fn.setControlValue("vCOLUMNSSELECTOR",UC.ParentObject.AV70ColumnsSelector); });
   DDO_GRIDCOLUMNSSELECTORContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_GRIDCOLUMNSSELECTORContainer.addEventHandler("OnColumnsChanged", this.e152t2_client);
   this.setUserControl(DDO_GRIDCOLUMNSSELECTORContainer);
   this.DDO_MANAGEFILTERSContainer = gx.uc.getNew(this, 28, 0, "BootstrapDropDownOptions", "DDO_MANAGEFILTERSContainer", "Ddo_managefilters", "DDO_MANAGEFILTERS");
   var DDO_MANAGEFILTERSContainer = this.DDO_MANAGEFILTERSContainer;
   DDO_MANAGEFILTERSContainer.setProp("Class", "Class", "", "char");
   DDO_MANAGEFILTERSContainer.setProp("Enabled", "Enabled", true, "boolean");
   DDO_MANAGEFILTERSContainer.setProp("IconType", "Icontype", "FontIcon", "str");
   DDO_MANAGEFILTERSContainer.setProp("Icon", "Icon", "fas fa-filter", "str");
   DDO_MANAGEFILTERSContainer.setProp("Caption", "Caption", "", "str");
   DDO_MANAGEFILTERSContainer.setProp("Tooltip", "Tooltip", "WWP_ManageFiltersTooltip", "str");
   DDO_MANAGEFILTERSContainer.setProp("Cls", "Cls", "ManageFilters", "str");
   DDO_MANAGEFILTERSContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_MANAGEFILTERSContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_MANAGEFILTERSContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "Regular", "str");
   DDO_MANAGEFILTERSContainer.setProp("Visible", "Visible", true, "bool");
   DDO_MANAGEFILTERSContainer.setProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_MANAGEFILTERSContainer.addV2CFunction('AV44ManageFiltersData', "vMANAGEFILTERSDATA", 'SetDropDownOptionsData');
   DDO_MANAGEFILTERSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV44ManageFiltersData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vMANAGEFILTERSDATA",UC.ParentObject.AV44ManageFiltersData); });
   DDO_MANAGEFILTERSContainer.setProp("Gx Control Type", "Gxcontroltype", '', "int");
   DDO_MANAGEFILTERSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_MANAGEFILTERSContainer.addEventHandler("OnOptionClicked", this.e112t2_client);
   this.setUserControl(DDO_MANAGEFILTERSContainer);
   GXValidFnc[2]={ id: 2, fld:"",grid:0};
   GXValidFnc[3]={ id: 3, fld:"LAYOUTMAINTABLE",grid:0};
   GXValidFnc[4]={ id: 4, fld:"",grid:0};
   GXValidFnc[5]={ id: 5, fld:"",grid:0};
   GXValidFnc[6]={ id: 6, fld:"TABLEMAIN",grid:0};
   GXValidFnc[7]={ id: 7, fld:"",grid:0};
   GXValidFnc[8]={ id: 8, fld:"",grid:0};
   GXValidFnc[9]={ id: 9, fld:"TABLEHEADER",grid:0};
   GXValidFnc[10]={ id: 10, fld:"",grid:0};
   GXValidFnc[11]={ id: 11, fld:"TABLEACTIONS",grid:0};
   GXValidFnc[12]={ id: 12, fld:"",grid:0};
   GXValidFnc[13]={ id: 13, fld:"TEXTBLOCKTITLE", format:0,grid:0};
   GXValidFnc[14]={ id: 14, fld:"",grid:0};
   GXValidFnc[15]={ id: 15, fld:"",grid:0};
   GXValidFnc[16]={ id: 16, fld:"",grid:0};
   GXValidFnc[17]={ id: 17, fld:"BTNINSERT",grid:0,evt:"e192t2_client"};
   GXValidFnc[18]={ id: 18, fld:"",grid:0};
   GXValidFnc[19]={ id: 19, fld:"BTNEXPORT",grid:0,evt:"e202t2_client"};
   GXValidFnc[20]={ id: 20, fld:"",grid:0};
   GXValidFnc[21]={ id: 21, fld:"BTNEXPORTREPORT",grid:0,evt:"e212t2_client"};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"BTNEDITCOLUMNS",grid:0};
   GXValidFnc[24]={ id: 24, fld:"",grid:0};
   GXValidFnc[25]={ id: 25, fld:"TABLERIGHTHEADER",grid:0};
   GXValidFnc[30]={ id: 30, fld:"TABLEFILTERS",grid:0};
   GXValidFnc[33]={ id: 33, fld:"TABLEDYNAMICFILTERS",grid:0};
   GXValidFnc[36]={ id: 36, fld:"DYNAMICFILTERSPREFIX1", format:0,grid:0};
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id:39 ,lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vDYNAMICFILTERSSELECTOR1",gxz:"ZV25DynamicFiltersSelector1",gxold:"OV25DynamicFiltersSelector1",gxvar:"AV25DynamicFiltersSelector1",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV25DynamicFiltersSelector1=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV25DynamicFiltersSelector1=Value},v2c:function(){gx.fn.setComboBoxValue("vDYNAMICFILTERSSELECTOR1",gx.O.AV25DynamicFiltersSelector1)},c2v:function(){if(this.val()!==undefined)gx.O.AV25DynamicFiltersSelector1=this.val()},val:function(){return gx.fn.getControlValue("vDYNAMICFILTERSSELECTOR1")},nac:gx.falseFn,evt:"e232t2_client"};
   GXValidFnc[41]={ id: 41, fld:"DYNAMICFILTERSMIDDLE1", format:0,grid:0};
   GXValidFnc[43]={ id: 43, fld:"TABLEMERGEDDYNAMICFILTERS1",grid:0};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id:47 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vDYNAMICFILTERSOPERATOR1",gxz:"ZV26DynamicFiltersOperator1",gxold:"OV26DynamicFiltersOperator1",gxvar:"AV26DynamicFiltersOperator1",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV26DynamicFiltersOperator1=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV26DynamicFiltersOperator1=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vDYNAMICFILTERSOPERATOR1",gx.O.AV26DynamicFiltersOperator1)},c2v:function(){if(this.val()!==undefined)gx.O.AV26DynamicFiltersOperator1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDYNAMICFILTERSOPERATOR1",'.')},nac:gx.falseFn};
   GXValidFnc[49]={ id: 49, fld:"",grid:0};
   GXValidFnc[50]={ id:50 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vSECUSERNAME1",gxz:"ZV27SecUserName1",gxold:"OV27SecUserName1",gxvar:"AV27SecUserName1",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV27SecUserName1=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV27SecUserName1=Value},v2c:function(){gx.fn.setControlValue("vSECUSERNAME1",gx.O.AV27SecUserName1,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV27SecUserName1=this.val()},val:function(){return gx.fn.getControlValue("vSECUSERNAME1")},nac:gx.falseFn};
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[53]={ id:53 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vSECUSERDESCRIPCION1",gxz:"ZV91SecUserDescripcion1",gxold:"OV91SecUserDescripcion1",gxvar:"AV91SecUserDescripcion1",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV91SecUserDescripcion1=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV91SecUserDescripcion1=Value},v2c:function(){gx.fn.setControlValue("vSECUSERDESCRIPCION1",gx.O.AV91SecUserDescripcion1,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV91SecUserDescripcion1=this.val()},val:function(){return gx.fn.getControlValue("vSECUSERDESCRIPCION1")},nac:gx.falseFn};
   GXValidFnc[55]={ id: 55, fld:"UNNAMEDTABLEDYNAMICFILTERS_1",grid:0};
   GXValidFnc[58]={ id: 58, fld:"ADDDYNAMICFILTERS1",grid:0,evt:"e222t2_client"};
   GXValidFnc[60]={ id: 60, fld:"REMOVEDYNAMICFILTERS1",grid:0,evt:"e162t2_client"};
   GXValidFnc[63]={ id: 63, fld:"DYNAMICFILTERSPREFIX2", format:0,grid:0};
   GXValidFnc[65]={ id: 65, fld:"",grid:0};
   GXValidFnc[66]={ id:66 ,lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vDYNAMICFILTERSSELECTOR2",gxz:"ZV29DynamicFiltersSelector2",gxold:"OV29DynamicFiltersSelector2",gxvar:"AV29DynamicFiltersSelector2",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV29DynamicFiltersSelector2=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV29DynamicFiltersSelector2=Value},v2c:function(){gx.fn.setComboBoxValue("vDYNAMICFILTERSSELECTOR2",gx.O.AV29DynamicFiltersSelector2)},c2v:function(){if(this.val()!==undefined)gx.O.AV29DynamicFiltersSelector2=this.val()},val:function(){return gx.fn.getControlValue("vDYNAMICFILTERSSELECTOR2")},nac:gx.falseFn,evt:"e252t2_client"};
   GXValidFnc[68]={ id: 68, fld:"DYNAMICFILTERSMIDDLE2", format:0,grid:0};
   GXValidFnc[70]={ id: 70, fld:"TABLEMERGEDDYNAMICFILTERS2",grid:0};
   GXValidFnc[73]={ id: 73, fld:"",grid:0};
   GXValidFnc[74]={ id:74 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vDYNAMICFILTERSOPERATOR2",gxz:"ZV30DynamicFiltersOperator2",gxold:"OV30DynamicFiltersOperator2",gxvar:"AV30DynamicFiltersOperator2",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV30DynamicFiltersOperator2=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV30DynamicFiltersOperator2=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vDYNAMICFILTERSOPERATOR2",gx.O.AV30DynamicFiltersOperator2)},c2v:function(){if(this.val()!==undefined)gx.O.AV30DynamicFiltersOperator2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDYNAMICFILTERSOPERATOR2",'.')},nac:gx.falseFn};
   GXValidFnc[76]={ id: 76, fld:"",grid:0};
   GXValidFnc[77]={ id:77 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vSECUSERNAME2",gxz:"ZV31SecUserName2",gxold:"OV31SecUserName2",gxvar:"AV31SecUserName2",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV31SecUserName2=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV31SecUserName2=Value},v2c:function(){gx.fn.setControlValue("vSECUSERNAME2",gx.O.AV31SecUserName2,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV31SecUserName2=this.val()},val:function(){return gx.fn.getControlValue("vSECUSERNAME2")},nac:gx.falseFn};
   GXValidFnc[79]={ id: 79, fld:"",grid:0};
   GXValidFnc[80]={ id:80 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vSECUSERDESCRIPCION2",gxz:"ZV92SecUserDescripcion2",gxold:"OV92SecUserDescripcion2",gxvar:"AV92SecUserDescripcion2",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV92SecUserDescripcion2=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV92SecUserDescripcion2=Value},v2c:function(){gx.fn.setControlValue("vSECUSERDESCRIPCION2",gx.O.AV92SecUserDescripcion2,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV92SecUserDescripcion2=this.val()},val:function(){return gx.fn.getControlValue("vSECUSERDESCRIPCION2")},nac:gx.falseFn};
   GXValidFnc[82]={ id: 82, fld:"UNNAMEDTABLEDYNAMICFILTERS_2",grid:0};
   GXValidFnc[85]={ id: 85, fld:"ADDDYNAMICFILTERS2",grid:0,evt:"e242t2_client"};
   GXValidFnc[87]={ id: 87, fld:"REMOVEDYNAMICFILTERS2",grid:0,evt:"e172t2_client"};
   GXValidFnc[90]={ id: 90, fld:"DYNAMICFILTERSPREFIX3", format:0,grid:0};
   GXValidFnc[92]={ id: 92, fld:"",grid:0};
   GXValidFnc[93]={ id:93 ,lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vDYNAMICFILTERSSELECTOR3",gxz:"ZV33DynamicFiltersSelector3",gxold:"OV33DynamicFiltersSelector3",gxvar:"AV33DynamicFiltersSelector3",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV33DynamicFiltersSelector3=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV33DynamicFiltersSelector3=Value},v2c:function(){gx.fn.setComboBoxValue("vDYNAMICFILTERSSELECTOR3",gx.O.AV33DynamicFiltersSelector3)},c2v:function(){if(this.val()!==undefined)gx.O.AV33DynamicFiltersSelector3=this.val()},val:function(){return gx.fn.getControlValue("vDYNAMICFILTERSSELECTOR3")},nac:gx.falseFn,evt:"e262t2_client"};
   GXValidFnc[95]={ id: 95, fld:"DYNAMICFILTERSMIDDLE3", format:0,grid:0};
   GXValidFnc[97]={ id: 97, fld:"TABLEMERGEDDYNAMICFILTERS3",grid:0};
   GXValidFnc[100]={ id: 100, fld:"",grid:0};
   GXValidFnc[101]={ id:101 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vDYNAMICFILTERSOPERATOR3",gxz:"ZV34DynamicFiltersOperator3",gxold:"OV34DynamicFiltersOperator3",gxvar:"AV34DynamicFiltersOperator3",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV34DynamicFiltersOperator3=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV34DynamicFiltersOperator3=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vDYNAMICFILTERSOPERATOR3",gx.O.AV34DynamicFiltersOperator3)},c2v:function(){if(this.val()!==undefined)gx.O.AV34DynamicFiltersOperator3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDYNAMICFILTERSOPERATOR3",'.')},nac:gx.falseFn};
   GXValidFnc[103]={ id: 103, fld:"",grid:0};
   GXValidFnc[104]={ id:104 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vSECUSERNAME3",gxz:"ZV35SecUserName3",gxold:"OV35SecUserName3",gxvar:"AV35SecUserName3",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV35SecUserName3=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV35SecUserName3=Value},v2c:function(){gx.fn.setControlValue("vSECUSERNAME3",gx.O.AV35SecUserName3,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV35SecUserName3=this.val()},val:function(){return gx.fn.getControlValue("vSECUSERNAME3")},nac:gx.falseFn};
   GXValidFnc[106]={ id: 106, fld:"",grid:0};
   GXValidFnc[107]={ id:107 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vSECUSERDESCRIPCION3",gxz:"ZV93SecUserDescripcion3",gxold:"OV93SecUserDescripcion3",gxvar:"AV93SecUserDescripcion3",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV93SecUserDescripcion3=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV93SecUserDescripcion3=Value},v2c:function(){gx.fn.setControlValue("vSECUSERDESCRIPCION3",gx.O.AV93SecUserDescripcion3,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV93SecUserDescripcion3=this.val()},val:function(){return gx.fn.getControlValue("vSECUSERDESCRIPCION3")},nac:gx.falseFn};
   GXValidFnc[109]={ id: 109, fld:"UNNAMEDTABLEDYNAMICFILTERS_3",grid:0};
   GXValidFnc[112]={ id: 112, fld:"REMOVEDYNAMICFILTERS3",grid:0,evt:"e182t2_client"};
   GXValidFnc[113]={ id: 113, fld:"",grid:0};
   GXValidFnc[114]={ id: 114, fld:"",grid:0};
   GXValidFnc[116]={ id: 116, fld:"",grid:0};
   GXValidFnc[117]={ id: 117, fld:"",grid:0};
   GXValidFnc[118]={ id: 118, fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};
   GXValidFnc[119]={ id: 119, fld:"",grid:0};
   GXValidFnc[120]={ id: 120, fld:"",grid:0};
   GXValidFnc[122]={ id:122 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:121,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDISPLAY",gxz:"ZV82Display",gxold:"OV82Display",gxvar:"AV82Display",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV82Display=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV82Display=Value},v2c:function(row){gx.fn.setGridControlValue("vDISPLAY",row || gx.fn.currentGridRowImpl(121),gx.O.AV82Display,1)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV82Display=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vDISPLAY",row || gx.fn.currentGridRowImpl(121))},nac:gx.falseFn};
   GXValidFnc[123]={ id:123 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:121,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE",gxz:"ZV12Update",gxold:"OV12Update",gxvar:"AV12Update",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV12Update=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV12Update=Value},v2c:function(row){gx.fn.setGridControlValue("vUPDATE",row || gx.fn.currentGridRowImpl(121),gx.O.AV12Update,1)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV12Update=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vUPDATE",row || gx.fn.currentGridRowImpl(121))},nac:gx.falseFn};
   GXValidFnc[124]={ id:124 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:121,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE",gxz:"ZV13Delete",gxold:"OV13Delete",gxvar:"AV13Delete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV13Delete=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV13Delete=Value},v2c:function(row){gx.fn.setGridControlValue("vDELETE",row || gx.fn.currentGridRowImpl(121),gx.O.AV13Delete,1)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV13Delete=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vDELETE",row || gx.fn.currentGridRowImpl(121))},nac:gx.falseFn};
   GXValidFnc[125]={ id:125 ,lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:121,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUAASSOCIATEROLES",gxz:"ZV15UAAssociateRoles",gxold:"OV15UAAssociateRoles",gxvar:"AV15UAAssociateRoles",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV15UAAssociateRoles=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV15UAAssociateRoles=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vUAASSOCIATEROLES",row || gx.fn.currentGridRowImpl(121),gx.O.AV15UAAssociateRoles,gx.O.AV140Uaassociateroles_GXI)},c2v:function(row){gx.O.AV140Uaassociateroles_GXI=this.val_GXI();if(this.val(row)!==undefined)gx.O.AV15UAAssociateRoles=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vUAASSOCIATEROLES",row || gx.fn.currentGridRowImpl(121))},val_GXI:function(row){return gx.fn.getGridControlValue("vUAASSOCIATEROLES_GXI",row || gx.fn.currentGridRowImpl(121))}, gxvar_GXI:'AV140Uaassociateroles_GXI',nac:gx.falseFn};
   GXValidFnc[126]={ id:126 ,lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:121,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vASOCIARCORREDOR",gxz:"ZV94AsociarCorredor",gxold:"OV94AsociarCorredor",gxvar:"AV94AsociarCorredor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV94AsociarCorredor=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV94AsociarCorredor=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vASOCIARCORREDOR",row || gx.fn.currentGridRowImpl(121),gx.O.AV94AsociarCorredor,gx.O.AV141Asociarcorredor_GXI)},c2v:function(row){gx.O.AV141Asociarcorredor_GXI=this.val_GXI();if(this.val(row)!==undefined)gx.O.AV94AsociarCorredor=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vASOCIARCORREDOR",row || gx.fn.currentGridRowImpl(121))},val_GXI:function(row){return gx.fn.getGridControlValue("vASOCIARCORREDOR_GXI",row || gx.fn.currentGridRowImpl(121))}, gxvar_GXI:'AV141Asociarcorredor_GXI',nac:gx.falseFn};
   GXValidFnc[127]={ id:127 ,lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:121,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERID",gxz:"Z141SecUserId",gxold:"O141SecUserId",gxvar:"A141SecUserId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A141SecUserId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z141SecUserId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SECUSERID",row || gx.fn.currentGridRowImpl(121),gx.O.A141SecUserId,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A141SecUserId=gx.num.intval(this.val(row))},val:function(row){return gx.fn.getGridIntegerValue("SECUSERID",row || gx.fn.currentGridRowImpl(121),'.')},nac:gx.falseFn};
   GXValidFnc[128]={ id:128 ,lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:121,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERNAME",gxz:"Z149SecUserName",gxold:"O149SecUserName",gxvar:"A149SecUserName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A149SecUserName=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z149SecUserName=Value},v2c:function(row){gx.fn.setGridControlValue("SECUSERNAME",row || gx.fn.currentGridRowImpl(121),gx.O.A149SecUserName,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A149SecUserName=this.val(row)},val:function(row){return gx.fn.getGridControlValue("SECUSERNAME",row || gx.fn.currentGridRowImpl(121))},nac:gx.falseFn};
   GXValidFnc[129]={ id:129 ,lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:121,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERDESCRIPCION",gxz:"Z151SecUserDescripcion",gxold:"O151SecUserDescripcion",gxvar:"A151SecUserDescripcion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A151SecUserDescripcion=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z151SecUserDescripcion=Value},v2c:function(row){gx.fn.setGridControlValue("SECUSERDESCRIPCION",row || gx.fn.currentGridRowImpl(121),gx.O.A151SecUserDescripcion,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.A151SecUserDescripcion=this.val(row)},val:function(row){return gx.fn.getGridControlValue("SECUSERDESCRIPCION",row || gx.fn.currentGridRowImpl(121))},nac:gx.falseFn};
   GXValidFnc[130]={ id:130 ,lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:121,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERPADRE",gxz:"Z152SecUserPadre",gxold:"O152SecUserPadre",gxvar:"A152SecUserPadre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A152SecUserPadre=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z152SecUserPadre=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SECUSERPADRE",row || gx.fn.currentGridRowImpl(121),gx.O.A152SecUserPadre,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A152SecUserPadre=gx.num.intval(this.val(row))},val:function(row){return gx.fn.getGridIntegerValue("SECUSERPADRE",row || gx.fn.currentGridRowImpl(121),'.')},nac:gx.falseFn};
   GXValidFnc[131]={ id:131 ,lvl:2,type:"boolean",len:4,dec:0,sign:false,ro:1,isacc:0,grid:121,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERCARGAPOLIZAS",gxz:"Z166SecUserCargaPolizas",gxold:"O166SecUserCargaPolizas",gxvar:"A166SecUserCargaPolizas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.A166SecUserCargaPolizas=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z166SecUserCargaPolizas=gx.lang.booleanValue(Value)},v2c:function(row){gx.fn.setGridCheckBoxValue("SECUSERCARGAPOLIZAS",row || gx.fn.currentGridRowImpl(121),gx.O.A166SecUserCargaPolizas,true)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A166SecUserCargaPolizas=gx.lang.booleanValue(this.val(row))},val:function(row){return gx.fn.getGridControlValue("SECUSERCARGAPOLIZAS",row || gx.fn.currentGridRowImpl(121))},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[132]={ id:132 ,lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:121,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERMAIL",gxz:"Z216SecUserMail",gxold:"O216SecUserMail",gxvar:"A216SecUserMail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'email',v2v:function(Value){if(Value!==undefined)gx.O.A216SecUserMail=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z216SecUserMail=Value},v2c:function(row){gx.fn.setGridControlValue("SECUSERMAIL",row || gx.fn.currentGridRowImpl(121),gx.O.A216SecUserMail,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.A216SecUserMail=this.val(row)},val:function(row){return gx.fn.getGridControlValue("SECUSERMAIL",row || gx.fn.currentGridRowImpl(121))},nac:gx.falseFn};
   GXValidFnc[133]={ id:133 ,lvl:2,type:"svchar",len:400,dec:0,sign:false,ro:1,isacc:0,grid:121,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERKEY",gxz:"Z217SecUserKey",gxold:"O217SecUserKey",gxvar:"A217SecUserKey",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A217SecUserKey=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z217SecUserKey=Value},v2c:function(row){gx.fn.setGridControlValue("SECUSERKEY",row || gx.fn.currentGridRowImpl(121),gx.O.A217SecUserKey,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A217SecUserKey=this.val(row)},val:function(row){return gx.fn.getGridControlValue("SECUSERKEY",row || gx.fn.currentGridRowImpl(121))},nac:gx.falseFn};
   GXValidFnc[134]={ id:134 ,lvl:2,type:"svchar",len:400,dec:0,sign:false,ro:1,isacc:0,grid:121,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERTOKEN",gxz:"Z218SecUserToken",gxold:"O218SecUserToken",gxvar:"A218SecUserToken",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A218SecUserToken=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z218SecUserToken=Value},v2c:function(row){gx.fn.setGridControlValue("SECUSERTOKEN",row || gx.fn.currentGridRowImpl(121),gx.O.A218SecUserToken,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A218SecUserToken=this.val(row)},val:function(row){return gx.fn.getGridControlValue("SECUSERTOKEN",row || gx.fn.currentGridRowImpl(121))},nac:gx.falseFn};
   GXValidFnc[135]={ id:135 ,lvl:2,type:"dtime",len:10,dec:12,sign:false,ro:1,isacc:0,grid:121,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERTOKENFECHA",gxz:"Z219SecUserTokenFecha",gxold:"O219SecUserTokenFecha",gxvar:"A219SecUserTokenFecha",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99:99.999",dec:12},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.A219SecUserTokenFecha=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z219SecUserTokenFecha=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("SECUSERTOKENFECHA",row || gx.fn.currentGridRowImpl(121),gx.O.A219SecUserTokenFecha,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A219SecUserTokenFecha=gx.fn.toDatetimeValue(this.val(row))},val:function(row){return gx.fn.getGridDateTimeValue("SECUSERTOKENFECHA",row || gx.fn.currentGridRowImpl(121))},nac:gx.falseFn};
   GXValidFnc[136]={ id: 136, fld:"",grid:0};
   GXValidFnc[137]={ id: 137, fld:"",grid:0};
   GXValidFnc[139]={ id: 139, fld:"",grid:0};
   GXValidFnc[140]={ id: 140, fld:"",grid:0};
   GXValidFnc[141]={ id: 141, fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};
   GXValidFnc[142]={ id: 142, fld:"JSDYNAMICFILTERS", format:1,grid:0};
   GXValidFnc[146]={ id: 146, fld:"DDO_SECUSERTOKENFECHAAUXDATES",grid:0};
   GXValidFnc[147]={ id:147 ,lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ddo_secusertokenfechaauxdate,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_SECUSERTOKENFECHAAUXDATE",gxz:"ZV109DDO_SecUserTokenFechaAuxDate",gxold:"OV109DDO_SecUserTokenFechaAuxDate",gxvar:"AV109DDO_SecUserTokenFechaAuxDate",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[147],ip:[147],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV109DDO_SecUserTokenFechaAuxDate=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV109DDO_SecUserTokenFechaAuxDate=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDDO_SECUSERTOKENFECHAAUXDATE",gx.O.AV109DDO_SecUserTokenFechaAuxDate,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV109DDO_SecUserTokenFechaAuxDate=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDDO_SECUSERTOKENFECHAAUXDATE")},nac:gx.falseFn};
   GXValidFnc[148]={ id:148 ,lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ddo_secusertokenfechaauxdateto,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_SECUSERTOKENFECHAAUXDATETO",gxz:"ZV110DDO_SecUserTokenFechaAuxDateTo",gxold:"OV110DDO_SecUserTokenFechaAuxDateTo",gxvar:"AV110DDO_SecUserTokenFechaAuxDateTo",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[148],ip:[148],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV110DDO_SecUserTokenFechaAuxDateTo=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV110DDO_SecUserTokenFechaAuxDateTo=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDDO_SECUSERTOKENFECHAAUXDATETO",gx.O.AV110DDO_SecUserTokenFechaAuxDateTo,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV110DDO_SecUserTokenFechaAuxDateTo=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDDO_SECUSERTOKENFECHAAUXDATETO")},nac:gx.falseFn};
   this.AV25DynamicFiltersSelector1 = "" ;
   this.ZV25DynamicFiltersSelector1 = "" ;
   this.OV25DynamicFiltersSelector1 = "" ;
   this.AV26DynamicFiltersOperator1 = 0 ;
   this.ZV26DynamicFiltersOperator1 = 0 ;
   this.OV26DynamicFiltersOperator1 = 0 ;
   this.AV27SecUserName1 = "" ;
   this.ZV27SecUserName1 = "" ;
   this.OV27SecUserName1 = "" ;
   this.AV91SecUserDescripcion1 = "" ;
   this.ZV91SecUserDescripcion1 = "" ;
   this.OV91SecUserDescripcion1 = "" ;
   this.AV29DynamicFiltersSelector2 = "" ;
   this.ZV29DynamicFiltersSelector2 = "" ;
   this.OV29DynamicFiltersSelector2 = "" ;
   this.AV30DynamicFiltersOperator2 = 0 ;
   this.ZV30DynamicFiltersOperator2 = 0 ;
   this.OV30DynamicFiltersOperator2 = 0 ;
   this.AV31SecUserName2 = "" ;
   this.ZV31SecUserName2 = "" ;
   this.OV31SecUserName2 = "" ;
   this.AV92SecUserDescripcion2 = "" ;
   this.ZV92SecUserDescripcion2 = "" ;
   this.OV92SecUserDescripcion2 = "" ;
   this.AV33DynamicFiltersSelector3 = "" ;
   this.ZV33DynamicFiltersSelector3 = "" ;
   this.OV33DynamicFiltersSelector3 = "" ;
   this.AV34DynamicFiltersOperator3 = 0 ;
   this.ZV34DynamicFiltersOperator3 = 0 ;
   this.OV34DynamicFiltersOperator3 = 0 ;
   this.AV35SecUserName3 = "" ;
   this.ZV35SecUserName3 = "" ;
   this.OV35SecUserName3 = "" ;
   this.AV93SecUserDescripcion3 = "" ;
   this.ZV93SecUserDescripcion3 = "" ;
   this.OV93SecUserDescripcion3 = "" ;
   this.ZV82Display = "" ;
   this.OV82Display = "" ;
   this.ZV12Update = "" ;
   this.OV12Update = "" ;
   this.ZV13Delete = "" ;
   this.OV13Delete = "" ;
   this.ZV15UAAssociateRoles = "" ;
   this.OV15UAAssociateRoles = "" ;
   this.ZV94AsociarCorredor = "" ;
   this.OV94AsociarCorredor = "" ;
   this.Z141SecUserId = 0 ;
   this.O141SecUserId = 0 ;
   this.Z149SecUserName = "" ;
   this.O149SecUserName = "" ;
   this.Z151SecUserDescripcion = "" ;
   this.O151SecUserDescripcion = "" ;
   this.Z152SecUserPadre = 0 ;
   this.O152SecUserPadre = 0 ;
   this.Z166SecUserCargaPolizas = false ;
   this.O166SecUserCargaPolizas = false ;
   this.Z216SecUserMail = "" ;
   this.O216SecUserMail = "" ;
   this.Z217SecUserKey = "" ;
   this.O217SecUserKey = "" ;
   this.Z218SecUserToken = "" ;
   this.O218SecUserToken = "" ;
   this.Z219SecUserTokenFecha = gx.date.nullDate() ;
   this.O219SecUserTokenFecha = gx.date.nullDate() ;
   this.AV109DDO_SecUserTokenFechaAuxDate = gx.date.nullDate() ;
   this.ZV109DDO_SecUserTokenFechaAuxDate = gx.date.nullDate() ;
   this.OV109DDO_SecUserTokenFechaAuxDate = gx.date.nullDate() ;
   this.AV110DDO_SecUserTokenFechaAuxDateTo = gx.date.nullDate() ;
   this.ZV110DDO_SecUserTokenFechaAuxDateTo = gx.date.nullDate() ;
   this.OV110DDO_SecUserTokenFechaAuxDateTo = gx.date.nullDate() ;
   this.AV44ManageFiltersData = [ ] ;
   this.AV25DynamicFiltersSelector1 = "" ;
   this.AV26DynamicFiltersOperator1 = 0 ;
   this.AV27SecUserName1 = "" ;
   this.AV91SecUserDescripcion1 = "" ;
   this.AV29DynamicFiltersSelector2 = "" ;
   this.AV30DynamicFiltersOperator2 = 0 ;
   this.AV31SecUserName2 = "" ;
   this.AV92SecUserDescripcion2 = "" ;
   this.AV33DynamicFiltersSelector3 = "" ;
   this.AV34DynamicFiltersOperator3 = 0 ;
   this.AV35SecUserName3 = "" ;
   this.AV93SecUserDescripcion3 = "" ;
   this.AV79GridCurrentPage = 0 ;
   this.AV54DDO_TitleSettingsIcons = {Default:"",Default_GXI:"",Filtered:"",Filtered_GXI:"",SortedASC:"",SortedASC_GXI:"",SortedDSC:"",SortedDSC_GXI:"",FilteredSortedASC:"",FilteredSortedASC_GXI:"",FilteredSortedDSC:"",FilteredSortedDSC_GXI:"",OptionSortASC:"",OptionSortASC_GXI:"",OptionSortDSC:"",OptionSortDSC_GXI:"",OptionApplyFilter:"",OptionApplyFilter_GXI:"",OptionFilteringData:"",OptionFilteringData_GXI:"",OptionCleanFilters:"",OptionCleanFilters_GXI:"",SelectedOption:"",SelectedOption_GXI:"",MultiselOption:"",MultiselOption_GXI:"",MultiselSelOption:"",MultiselSelOption_GXI:"",TreeviewCollapse:"",TreeviewCollapse_GXI:"",TreeviewExpand:"",TreeviewExpand_GXI:""} ;
   this.AV109DDO_SecUserTokenFechaAuxDate = gx.date.nullDate() ;
   this.AV110DDO_SecUserTokenFechaAuxDateTo = gx.date.nullDate() ;
   this.AV82Display = "" ;
   this.AV12Update = "" ;
   this.AV13Delete = "" ;
   this.AV15UAAssociateRoles = "" ;
   this.AV94AsociarCorredor = "" ;
   this.A141SecUserId = 0 ;
   this.A149SecUserName = "" ;
   this.A151SecUserDescripcion = "" ;
   this.A152SecUserPadre = 0 ;
   this.A166SecUserCargaPolizas = false ;
   this.A216SecUserMail = "" ;
   this.A217SecUserKey = "" ;
   this.A218SecUserToken = "" ;
   this.A219SecUserTokenFecha = gx.date.nullDate() ;
   this.AV40ManageFiltersExecutionStep = 0 ;
   this.AV28DynamicFiltersEnabled2 = false ;
   this.AV32DynamicFiltersEnabled3 = false ;
   this.AV70ColumnsSelector = {Columns:[]} ;
   this.AV51TFSecUserName = "" ;
   this.AV52TFSecUserName_Sel = "" ;
   this.AV84TFSecUserDescripcion = "" ;
   this.AV85TFSecUserDescripcion_Sel = "" ;
   this.AV99TFSecUserCargaPolizas_Sel = 0 ;
   this.AV101TFSecUserMail = "" ;
   this.AV102TFSecUserMail_Sel = "" ;
   this.AV103TFSecUserKey = "" ;
   this.AV104TFSecUserKey_Sel = "" ;
   this.AV105TFSecUserToken = "" ;
   this.AV106TFSecUserToken_Sel = "" ;
   this.AV107TFSecUserTokenFecha = gx.date.nullDate() ;
   this.AV108TFSecUserTokenFecha_To = gx.date.nullDate() ;
   this.AV142Pgmname = "" ;
   this.AV23OrderedBy = 0 ;
   this.AV24OrderedDsc = false ;
   this.AV20GridState = {CurrentPage:0,OrderedBy:0,OrderedDsc:false,HidingSearch:0,PageSize:"",CollapsedRecords:"",GroupBy:"",FilterValues:[],DynamicFilters:[]} ;
   this.AV37DynamicFiltersIgnoreFirst = false ;
   this.AV36DynamicFiltersRemoving = false ;
   this.AV17IsAuthorized_Update = false ;
   this.AV18IsAuthorized_Delete = false ;
   this.AV16IsAuthorized_UAAssociateRoles = false ;
   this.AV95IsAuthorized_AsociarCorredor = false ;
   this.AV22GridStateDynamicFilter = {Selected:"",Value:"",Operator:0,ValueTo:""} ;
   this.Events = {"e122t2_client": ["GRIDPAGINATIONBAR.CHANGEPAGE", true] ,"e132t2_client": ["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", true] ,"e142t2_client": ["DDO_GRID.ONOPTIONCLICKED", true] ,"e152t2_client": ["DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED", true] ,"e162t2_client": ["'REMOVEDYNAMICFILTERS1'", true] ,"e172t2_client": ["'REMOVEDYNAMICFILTERS2'", true] ,"e182t2_client": ["'REMOVEDYNAMICFILTERS3'", true] ,"e112t2_client": ["DDO_MANAGEFILTERS.ONOPTIONCLICKED", true] ,"e192t2_client": ["'DOINSERT'", true] ,"e202t2_client": ["'DOEXPORT'", true] ,"e212t2_client": ["'DOEXPORTREPORT'", true] ,"e222t2_client": ["'ADDDYNAMICFILTERS1'", true] ,"e232t2_client": ["VDYNAMICFILTERSSELECTOR1.CLICK", true] ,"e242t2_client": ["'ADDDYNAMICFILTERS2'", true] ,"e252t2_client": ["VDYNAMICFILTERSSELECTOR2.CLICK", true] ,"e262t2_client": ["VDYNAMICFILTERSSELECTOR3.CLICK", true] ,"e302t2_client": ["ENTER", true] ,"e312t2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'gx.fn.getCtrlProperty("vUAASSOCIATEROLES","Title")',ctrl:'vUAASSOCIATEROLES',prop:'Title'},{av:'AV40ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV25DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{av:'AV28DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV29DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{av:'AV32DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV33DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{av:'AV70ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{ctrl:'GRID',prop:'Rows'},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV26DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV27SecUserName1',fld:'vSECUSERNAME1',pic:''},{av:'AV91SecUserDescripcion1',fld:'vSECUSERDESCRIPCION1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV30DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV31SecUserName2',fld:'vSECUSERNAME2',pic:''},{av:'AV92SecUserDescripcion2',fld:'vSECUSERDESCRIPCION2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV34DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV35SecUserName3',fld:'vSECUSERNAME3',pic:''},{av:'AV93SecUserDescripcion3',fld:'vSECUSERDESCRIPCION3',pic:''},{av:'AV51TFSecUserName',fld:'vTFSECUSERNAME',pic:''},{av:'AV52TFSecUserName_Sel',fld:'vTFSECUSERNAME_SEL',pic:''},{av:'AV84TFSecUserDescripcion',fld:'vTFSECUSERDESCRIPCION',pic:''},{av:'AV85TFSecUserDescripcion_Sel',fld:'vTFSECUSERDESCRIPCION_SEL',pic:''},{av:'AV99TFSecUserCargaPolizas_Sel',fld:'vTFSECUSERCARGAPOLIZAS_SEL',pic:'9'},{av:'AV101TFSecUserMail',fld:'vTFSECUSERMAIL',pic:''},{av:'AV102TFSecUserMail_Sel',fld:'vTFSECUSERMAIL_SEL',pic:''},{av:'AV103TFSecUserKey',fld:'vTFSECUSERKEY',pic:''},{av:'AV104TFSecUserKey_Sel',fld:'vTFSECUSERKEY_SEL',pic:''},{av:'AV105TFSecUserToken',fld:'vTFSECUSERTOKEN',pic:''},{av:'AV106TFSecUserToken_Sel',fld:'vTFSECUSERTOKEN_SEL',pic:''},{av:'AV107TFSecUserTokenFecha',fld:'vTFSECUSERTOKENFECHA',pic:'99/99/9999 99:99:99.999'},{av:'AV108TFSecUserTokenFecha_To',fld:'vTFSECUSERTOKENFECHA_TO',pic:'99/99/9999 99:99:99.999'},{av:'AV142Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV23OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV24OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV20GridState',fld:'vGRIDSTATE',pic:''},{av:'AV37DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV36DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV17IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV18IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV16IsAuthorized_UAAssociateRoles',fld:'vISAUTHORIZED_UAASSOCIATEROLES',pic:'',hsh:true},{av:'AV95IsAuthorized_AsociarCorredor',fld:'vISAUTHORIZED_ASOCIARCORREDOR',pic:'',hsh:true}],[{av:'AV40ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV26DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV30DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV34DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV70ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("SECUSERNAME","Visible")',ctrl:'SECUSERNAME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERDESCRIPCION","Visible")',ctrl:'SECUSERDESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERCARGAPOLIZAS","Visible")',ctrl:'SECUSERCARGAPOLIZAS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERMAIL","Visible")',ctrl:'SECUSERMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERKEY","Visible")',ctrl:'SECUSERKEY',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERTOKEN","Visible")',ctrl:'SECUSERTOKEN',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERTOKENFECHA","Visible")',ctrl:'SECUSERTOKENFECHA',prop:'Visible'},{av:'AV79GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV80GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV17IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:'vUPDATE',prop:'Visible'},{av:'AV18IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:'vDELETE',prop:'Visible'},{av:'AV16IsAuthorized_UAAssociateRoles',fld:'vISAUTHORIZED_UAASSOCIATEROLES',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUAASSOCIATEROLES","Visible")',ctrl:'vUAASSOCIATEROLES',prop:'Visible'},{av:'AV95IsAuthorized_AsociarCorredor',fld:'vISAUTHORIZED_ASOCIARCORREDOR',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vASOCIARCORREDOR","Visible")',ctrl:'vASOCIARCORREDOR',prop:'Visible'},{ctrl:'BTNINSERT',prop:'Visible'},{av:'AV44ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV20GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["START"] = [[{av:'AV23OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV25DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV29DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV33DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{av:'AV142Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV24OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV20GridState',fld:'vGRIDSTATE',pic:''},{av:'AV52TFSecUserName_Sel',fld:'vTFSECUSERNAME_SEL',pic:''},{av:'AV85TFSecUserDescripcion_Sel',fld:'vTFSECUSERDESCRIPCION_SEL',pic:''},{av:'AV99TFSecUserCargaPolizas_Sel',fld:'vTFSECUSERCARGAPOLIZAS_SEL',pic:'9'},{av:'AV102TFSecUserMail_Sel',fld:'vTFSECUSERMAIL_SEL',pic:''},{av:'AV104TFSecUserKey_Sel',fld:'vTFSECUSERKEY_SEL',pic:''},{av:'AV106TFSecUserToken_Sel',fld:'vTFSECUSERTOKEN_SEL',pic:''},{av:'AV51TFSecUserName',fld:'vTFSECUSERNAME',pic:''},{av:'AV84TFSecUserDescripcion',fld:'vTFSECUSERDESCRIPCION',pic:''},{av:'AV101TFSecUserMail',fld:'vTFSECUSERMAIL',pic:''},{av:'AV103TFSecUserKey',fld:'vTFSECUSERKEY',pic:''},{av:'AV105TFSecUserToken',fld:'vTFSECUSERTOKEN',pic:''},{av:'AV107TFSecUserTokenFecha',fld:'vTFSECUSERTOKENFECHA',pic:'99/99/9999 99:99:99.999'},{av:'AV109DDO_SecUserTokenFechaAuxDate',fld:'vDDO_SECUSERTOKENFECHAAUXDATE',pic:''},{av:'AV108TFSecUserTokenFecha_To',fld:'vTFSECUSERTOKENFECHA_TO',pic:'99/99/9999 99:99:99.999'},{av:'AV110DDO_SecUserTokenFechaAuxDateTo',fld:'vDDO_SECUSERTOKENFECHAAUXDATETO',pic:''},{av:'AV36DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''}],[{ctrl:'GRID',prop:'Rows'},{av:'gx.fn.getCtrlProperty("JSDYNAMICFILTERS","Caption")',ctrl:'JSDYNAMICFILTERS',prop:'Caption'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV25DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV29DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV33DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Jsonclick")',ctrl:'ADDDYNAMICFILTERS1',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Jsonclick")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Jsonclick")',ctrl:'ADDDYNAMICFILTERS2',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Jsonclick")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS3","Jsonclick")',ctrl:'REMOVEDYNAMICFILTERS3',prop:'Jsonclick'},{av:'this.DDO_GRIDContainer.GridInternalName',ctrl:'DDO_GRID',prop:'GridInternalName'},{ctrl:'FORM',prop:'Caption'},{av:'AV23OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV54DDO_TitleSettingsIcons',fld:'vDDO_TITLESETTINGSICONS',pic:''},{av:'this.DDO_GRIDCOLUMNSSELECTORContainer.TitleControlIdToReplace',ctrl:'DDO_GRIDCOLUMNSSELECTOR',prop:'TitleControlIdToReplace'},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'},{av:'gx.fn.getCtrlProperty("TEXTBLOCKTITLE","Caption")',ctrl:'TEXTBLOCKTITLE',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vUAASSOCIATEROLES","Title")',ctrl:'vUAASSOCIATEROLES',prop:'Title'},{av:'AV44ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'gx.fn.getCtrlProperty("vSECUSERNAME1","Visible")',ctrl:'vSECUSERNAME1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERDESCRIPCION1","Visible")',ctrl:'vSECUSERDESCRIPCION1',prop:'Visible'},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME2","Visible")',ctrl:'vSECUSERNAME2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERDESCRIPCION2","Visible")',ctrl:'vSECUSERDESCRIPCION2',prop:'Visible'},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME3","Visible")',ctrl:'vSECUSERNAME3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERDESCRIPCION3","Visible")',ctrl:'vSECUSERDESCRIPCION3',prop:'Visible'},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV20GridState',fld:'vGRIDSTATE',pic:''},{av:'AV24OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV26DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV27SecUserName1',fld:'vSECUSERNAME1',pic:''},{av:'AV91SecUserDescripcion1',fld:'vSECUSERDESCRIPCION1',pic:''},{av:'AV30DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV31SecUserName2',fld:'vSECUSERNAME2',pic:''},{av:'AV92SecUserDescripcion2',fld:'vSECUSERDESCRIPCION2',pic:''},{av:'AV34DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV35SecUserName3',fld:'vSECUSERNAME3',pic:''},{av:'AV93SecUserDescripcion3',fld:'vSECUSERDESCRIPCION3',pic:''},{av:'AV40ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV28DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV32DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV70ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV51TFSecUserName',fld:'vTFSECUSERNAME',pic:''},{av:'AV52TFSecUserName_Sel',fld:'vTFSECUSERNAME_SEL',pic:''},{av:'AV84TFSecUserDescripcion',fld:'vTFSECUSERDESCRIPCION',pic:''},{av:'AV85TFSecUserDescripcion_Sel',fld:'vTFSECUSERDESCRIPCION_SEL',pic:''},{av:'AV99TFSecUserCargaPolizas_Sel',fld:'vTFSECUSERCARGAPOLIZAS_SEL',pic:'9'},{av:'AV101TFSecUserMail',fld:'vTFSECUSERMAIL',pic:''},{av:'AV102TFSecUserMail_Sel',fld:'vTFSECUSERMAIL_SEL',pic:''},{av:'AV103TFSecUserKey',fld:'vTFSECUSERKEY',pic:''},{av:'AV104TFSecUserKey_Sel',fld:'vTFSECUSERKEY_SEL',pic:''},{av:'AV105TFSecUserToken',fld:'vTFSECUSERTOKEN',pic:''},{av:'AV106TFSecUserToken_Sel',fld:'vTFSECUSERTOKEN_SEL',pic:''},{av:'AV107TFSecUserTokenFecha',fld:'vTFSECUSERTOKENFECHA',pic:'99/99/9999 99:99:99.999'},{av:'AV108TFSecUserTokenFecha_To',fld:'vTFSECUSERTOKENFECHA_TO',pic:'99/99/9999 99:99:99.999'},{av:'AV142Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV37DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV36DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV17IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV18IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV16IsAuthorized_UAAssociateRoles',fld:'vISAUTHORIZED_UAASSOCIATEROLES',pic:'',hsh:true},{av:'AV95IsAuthorized_AsociarCorredor',fld:'vISAUTHORIZED_ASOCIARCORREDOR',pic:'',hsh:true},{av:'this.DDO_GRIDContainer.SortedStatus',ctrl:'DDO_GRID',prop:'SortedStatus'},{av:'AV109DDO_SecUserTokenFechaAuxDate',fld:'vDDO_SECUSERTOKENFECHAAUXDATE',pic:''},{av:'AV110DDO_SecUserTokenFechaAuxDateTo',fld:'vDDO_SECUSERTOKENFECHAAUXDATETO',pic:''},{av:'this.DDO_GRIDContainer.SelectedValue_set',ctrl:'DDO_GRID',prop:'SelectedValue_set'},{av:'this.DDO_GRIDContainer.FilteredText_set',ctrl:'DDO_GRID',prop:'FilteredText_set'},{av:'this.DDO_GRIDContainer.FilteredTextTo_set',ctrl:'DDO_GRID',prop:'FilteredTextTo_set'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'}]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV25DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV26DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV27SecUserName1',fld:'vSECUSERNAME1',pic:''},{av:'AV91SecUserDescripcion1',fld:'vSECUSERDESCRIPCION1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV29DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV30DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV31SecUserName2',fld:'vSECUSERNAME2',pic:''},{av:'AV92SecUserDescripcion2',fld:'vSECUSERDESCRIPCION2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV33DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV34DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV35SecUserName3',fld:'vSECUSERNAME3',pic:''},{av:'AV93SecUserDescripcion3',fld:'vSECUSERDESCRIPCION3',pic:''},{av:'AV40ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV28DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV32DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV70ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV51TFSecUserName',fld:'vTFSECUSERNAME',pic:''},{av:'AV52TFSecUserName_Sel',fld:'vTFSECUSERNAME_SEL',pic:''},{av:'AV84TFSecUserDescripcion',fld:'vTFSECUSERDESCRIPCION',pic:''},{av:'AV85TFSecUserDescripcion_Sel',fld:'vTFSECUSERDESCRIPCION_SEL',pic:''},{av:'AV99TFSecUserCargaPolizas_Sel',fld:'vTFSECUSERCARGAPOLIZAS_SEL',pic:'9'},{av:'AV101TFSecUserMail',fld:'vTFSECUSERMAIL',pic:''},{av:'AV102TFSecUserMail_Sel',fld:'vTFSECUSERMAIL_SEL',pic:''},{av:'AV103TFSecUserKey',fld:'vTFSECUSERKEY',pic:''},{av:'AV104TFSecUserKey_Sel',fld:'vTFSECUSERKEY_SEL',pic:''},{av:'AV105TFSecUserToken',fld:'vTFSECUSERTOKEN',pic:''},{av:'AV106TFSecUserToken_Sel',fld:'vTFSECUSERTOKEN_SEL',pic:''},{av:'AV107TFSecUserTokenFecha',fld:'vTFSECUSERTOKENFECHA',pic:'99/99/9999 99:99:99.999'},{av:'AV108TFSecUserTokenFecha_To',fld:'vTFSECUSERTOKENFECHA_TO',pic:'99/99/9999 99:99:99.999'},{av:'AV142Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV23OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV24OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV20GridState',fld:'vGRIDSTATE',pic:''},{av:'AV37DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV36DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'gx.fn.getCtrlProperty("vUAASSOCIATEROLES","Title")',ctrl:'vUAASSOCIATEROLES',prop:'Title'},{av:'AV17IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV18IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV16IsAuthorized_UAAssociateRoles',fld:'vISAUTHORIZED_UAASSOCIATEROLES',pic:'',hsh:true},{av:'AV95IsAuthorized_AsociarCorredor',fld:'vISAUTHORIZED_ASOCIARCORREDOR',pic:'',hsh:true},{av:'this.GRIDPAGINATIONBARContainer.SelectedPage',ctrl:'GRIDPAGINATIONBAR',prop:'SelectedPage'}],[]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV25DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV26DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV27SecUserName1',fld:'vSECUSERNAME1',pic:''},{av:'AV91SecUserDescripcion1',fld:'vSECUSERDESCRIPCION1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV29DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV30DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV31SecUserName2',fld:'vSECUSERNAME2',pic:''},{av:'AV92SecUserDescripcion2',fld:'vSECUSERDESCRIPCION2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV33DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV34DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV35SecUserName3',fld:'vSECUSERNAME3',pic:''},{av:'AV93SecUserDescripcion3',fld:'vSECUSERDESCRIPCION3',pic:''},{av:'AV40ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV28DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV32DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV70ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV51TFSecUserName',fld:'vTFSECUSERNAME',pic:''},{av:'AV52TFSecUserName_Sel',fld:'vTFSECUSERNAME_SEL',pic:''},{av:'AV84TFSecUserDescripcion',fld:'vTFSECUSERDESCRIPCION',pic:''},{av:'AV85TFSecUserDescripcion_Sel',fld:'vTFSECUSERDESCRIPCION_SEL',pic:''},{av:'AV99TFSecUserCargaPolizas_Sel',fld:'vTFSECUSERCARGAPOLIZAS_SEL',pic:'9'},{av:'AV101TFSecUserMail',fld:'vTFSECUSERMAIL',pic:''},{av:'AV102TFSecUserMail_Sel',fld:'vTFSECUSERMAIL_SEL',pic:''},{av:'AV103TFSecUserKey',fld:'vTFSECUSERKEY',pic:''},{av:'AV104TFSecUserKey_Sel',fld:'vTFSECUSERKEY_SEL',pic:''},{av:'AV105TFSecUserToken',fld:'vTFSECUSERTOKEN',pic:''},{av:'AV106TFSecUserToken_Sel',fld:'vTFSECUSERTOKEN_SEL',pic:''},{av:'AV107TFSecUserTokenFecha',fld:'vTFSECUSERTOKENFECHA',pic:'99/99/9999 99:99:99.999'},{av:'AV108TFSecUserTokenFecha_To',fld:'vTFSECUSERTOKENFECHA_TO',pic:'99/99/9999 99:99:99.999'},{av:'AV142Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV23OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV24OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV20GridState',fld:'vGRIDSTATE',pic:''},{av:'AV37DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV36DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'gx.fn.getCtrlProperty("vUAASSOCIATEROLES","Title")',ctrl:'vUAASSOCIATEROLES',prop:'Title'},{av:'AV17IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV18IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV16IsAuthorized_UAAssociateRoles',fld:'vISAUTHORIZED_UAASSOCIATEROLES',pic:'',hsh:true},{av:'AV95IsAuthorized_AsociarCorredor',fld:'vISAUTHORIZED_ASOCIARCORREDOR',pic:'',hsh:true},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'}],[{ctrl:'GRID',prop:'Rows'}]];
   this.EvtParms["DDO_GRID.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV25DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV26DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV27SecUserName1',fld:'vSECUSERNAME1',pic:''},{av:'AV91SecUserDescripcion1',fld:'vSECUSERDESCRIPCION1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV29DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV30DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV31SecUserName2',fld:'vSECUSERNAME2',pic:''},{av:'AV92SecUserDescripcion2',fld:'vSECUSERDESCRIPCION2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV33DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV34DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV35SecUserName3',fld:'vSECUSERNAME3',pic:''},{av:'AV93SecUserDescripcion3',fld:'vSECUSERDESCRIPCION3',pic:''},{av:'AV40ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV28DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV32DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV70ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV51TFSecUserName',fld:'vTFSECUSERNAME',pic:''},{av:'AV52TFSecUserName_Sel',fld:'vTFSECUSERNAME_SEL',pic:''},{av:'AV84TFSecUserDescripcion',fld:'vTFSECUSERDESCRIPCION',pic:''},{av:'AV85TFSecUserDescripcion_Sel',fld:'vTFSECUSERDESCRIPCION_SEL',pic:''},{av:'AV99TFSecUserCargaPolizas_Sel',fld:'vTFSECUSERCARGAPOLIZAS_SEL',pic:'9'},{av:'AV101TFSecUserMail',fld:'vTFSECUSERMAIL',pic:''},{av:'AV102TFSecUserMail_Sel',fld:'vTFSECUSERMAIL_SEL',pic:''},{av:'AV103TFSecUserKey',fld:'vTFSECUSERKEY',pic:''},{av:'AV104TFSecUserKey_Sel',fld:'vTFSECUSERKEY_SEL',pic:''},{av:'AV105TFSecUserToken',fld:'vTFSECUSERTOKEN',pic:''},{av:'AV106TFSecUserToken_Sel',fld:'vTFSECUSERTOKEN_SEL',pic:''},{av:'AV107TFSecUserTokenFecha',fld:'vTFSECUSERTOKENFECHA',pic:'99/99/9999 99:99:99.999'},{av:'AV108TFSecUserTokenFecha_To',fld:'vTFSECUSERTOKENFECHA_TO',pic:'99/99/9999 99:99:99.999'},{av:'AV142Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV23OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV24OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV20GridState',fld:'vGRIDSTATE',pic:''},{av:'AV37DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV36DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'gx.fn.getCtrlProperty("vUAASSOCIATEROLES","Title")',ctrl:'vUAASSOCIATEROLES',prop:'Title'},{av:'AV17IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV18IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV16IsAuthorized_UAAssociateRoles',fld:'vISAUTHORIZED_UAASSOCIATEROLES',pic:'',hsh:true},{av:'AV95IsAuthorized_AsociarCorredor',fld:'vISAUTHORIZED_ASOCIARCORREDOR',pic:'',hsh:true},{av:'this.DDO_GRIDContainer.ActiveEventKey',ctrl:'DDO_GRID',prop:'ActiveEventKey'},{av:'this.DDO_GRIDContainer.SelectedValue_get',ctrl:'DDO_GRID',prop:'SelectedValue_get'},{av:'this.DDO_GRIDContainer.FilteredTextTo_get',ctrl:'DDO_GRID',prop:'FilteredTextTo_get'},{av:'this.DDO_GRIDContainer.FilteredText_get',ctrl:'DDO_GRID',prop:'FilteredText_get'},{av:'this.DDO_GRIDContainer.SelectedColumn',ctrl:'DDO_GRID',prop:'SelectedColumn'}],[{av:'AV23OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV24OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV107TFSecUserTokenFecha',fld:'vTFSECUSERTOKENFECHA',pic:'99/99/9999 99:99:99.999'},{av:'AV108TFSecUserTokenFecha_To',fld:'vTFSECUSERTOKENFECHA_TO',pic:'99/99/9999 99:99:99.999'},{av:'AV105TFSecUserToken',fld:'vTFSECUSERTOKEN',pic:''},{av:'AV106TFSecUserToken_Sel',fld:'vTFSECUSERTOKEN_SEL',pic:''},{av:'AV103TFSecUserKey',fld:'vTFSECUSERKEY',pic:''},{av:'AV104TFSecUserKey_Sel',fld:'vTFSECUSERKEY_SEL',pic:''},{av:'AV101TFSecUserMail',fld:'vTFSECUSERMAIL',pic:''},{av:'AV102TFSecUserMail_Sel',fld:'vTFSECUSERMAIL_SEL',pic:''},{av:'AV99TFSecUserCargaPolizas_Sel',fld:'vTFSECUSERCARGAPOLIZAS_SEL',pic:'9'},{av:'AV84TFSecUserDescripcion',fld:'vTFSECUSERDESCRIPCION',pic:''},{av:'AV85TFSecUserDescripcion_Sel',fld:'vTFSECUSERDESCRIPCION_SEL',pic:''},{av:'AV51TFSecUserName',fld:'vTFSECUSERNAME',pic:''},{av:'AV52TFSecUserName_Sel',fld:'vTFSECUSERNAME_SEL',pic:''},{av:'this.DDO_GRIDContainer.SortedStatus',ctrl:'DDO_GRID',prop:'SortedStatus'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A141SecUserId',fld:'SECUSERID',pic:'ZZZ9',hsh:true},{av:'AV17IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV18IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV16IsAuthorized_UAAssociateRoles',fld:'vISAUTHORIZED_UAASSOCIATEROLES',pic:'',hsh:true},{av:'AV95IsAuthorized_AsociarCorredor',fld:'vISAUTHORIZED_ASOCIARCORREDOR',pic:'',hsh:true}],[{av:'AV82Display',fld:'vDISPLAY',pic:''},{av:'gx.fn.getCtrlProperty("vDISPLAY","Link")',ctrl:'vDISPLAY',prop:'Link'},{av:'AV12Update',fld:'vUPDATE',pic:''},{av:'gx.fn.getCtrlProperty("vUPDATE","Link")',ctrl:'vUPDATE',prop:'Link'},{av:'AV13Delete',fld:'vDELETE',pic:''},{av:'gx.fn.getCtrlProperty("vDELETE","Link")',ctrl:'vDELETE',prop:'Link'},{av:'AV15UAAssociateRoles',fld:'vUAASSOCIATEROLES',pic:''},{av:'gx.fn.getCtrlProperty("vUAASSOCIATEROLES","Tooltiptext")',ctrl:'vUAASSOCIATEROLES',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vUAASSOCIATEROLES","Link")',ctrl:'vUAASSOCIATEROLES',prop:'Link'},{av:'AV94AsociarCorredor',fld:'vASOCIARCORREDOR',pic:''},{av:'gx.fn.getCtrlProperty("vASOCIARCORREDOR","Tooltiptext")',ctrl:'vASOCIARCORREDOR',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vASOCIARCORREDOR","Link")',ctrl:'vASOCIARCORREDOR',prop:'Link'}]];
   this.EvtParms["DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV25DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV26DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV27SecUserName1',fld:'vSECUSERNAME1',pic:''},{av:'AV91SecUserDescripcion1',fld:'vSECUSERDESCRIPCION1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV29DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV30DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV31SecUserName2',fld:'vSECUSERNAME2',pic:''},{av:'AV92SecUserDescripcion2',fld:'vSECUSERDESCRIPCION2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV33DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV34DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV35SecUserName3',fld:'vSECUSERNAME3',pic:''},{av:'AV93SecUserDescripcion3',fld:'vSECUSERDESCRIPCION3',pic:''},{av:'AV40ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV28DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV32DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV70ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV51TFSecUserName',fld:'vTFSECUSERNAME',pic:''},{av:'AV52TFSecUserName_Sel',fld:'vTFSECUSERNAME_SEL',pic:''},{av:'AV84TFSecUserDescripcion',fld:'vTFSECUSERDESCRIPCION',pic:''},{av:'AV85TFSecUserDescripcion_Sel',fld:'vTFSECUSERDESCRIPCION_SEL',pic:''},{av:'AV99TFSecUserCargaPolizas_Sel',fld:'vTFSECUSERCARGAPOLIZAS_SEL',pic:'9'},{av:'AV101TFSecUserMail',fld:'vTFSECUSERMAIL',pic:''},{av:'AV102TFSecUserMail_Sel',fld:'vTFSECUSERMAIL_SEL',pic:''},{av:'AV103TFSecUserKey',fld:'vTFSECUSERKEY',pic:''},{av:'AV104TFSecUserKey_Sel',fld:'vTFSECUSERKEY_SEL',pic:''},{av:'AV105TFSecUserToken',fld:'vTFSECUSERTOKEN',pic:''},{av:'AV106TFSecUserToken_Sel',fld:'vTFSECUSERTOKEN_SEL',pic:''},{av:'AV107TFSecUserTokenFecha',fld:'vTFSECUSERTOKENFECHA',pic:'99/99/9999 99:99:99.999'},{av:'AV108TFSecUserTokenFecha_To',fld:'vTFSECUSERTOKENFECHA_TO',pic:'99/99/9999 99:99:99.999'},{av:'AV142Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV23OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV24OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV20GridState',fld:'vGRIDSTATE',pic:''},{av:'AV37DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV36DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'gx.fn.getCtrlProperty("vUAASSOCIATEROLES","Title")',ctrl:'vUAASSOCIATEROLES',prop:'Title'},{av:'AV17IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV18IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV16IsAuthorized_UAAssociateRoles',fld:'vISAUTHORIZED_UAASSOCIATEROLES',pic:'',hsh:true},{av:'AV95IsAuthorized_AsociarCorredor',fld:'vISAUTHORIZED_ASOCIARCORREDOR',pic:'',hsh:true},{av:'this.DDO_GRIDCOLUMNSSELECTORContainer.ColumnsSelectorValues',ctrl:'DDO_GRIDCOLUMNSSELECTOR',prop:'ColumnsSelectorValues'}],[{av:'AV70ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV40ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV26DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV30DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV34DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("SECUSERNAME","Visible")',ctrl:'SECUSERNAME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERDESCRIPCION","Visible")',ctrl:'SECUSERDESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERCARGAPOLIZAS","Visible")',ctrl:'SECUSERCARGAPOLIZAS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERMAIL","Visible")',ctrl:'SECUSERMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERKEY","Visible")',ctrl:'SECUSERKEY',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERTOKEN","Visible")',ctrl:'SECUSERTOKEN',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERTOKENFECHA","Visible")',ctrl:'SECUSERTOKENFECHA',prop:'Visible'},{av:'AV79GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV80GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV17IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:'vUPDATE',prop:'Visible'},{av:'AV18IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:'vDELETE',prop:'Visible'},{av:'AV16IsAuthorized_UAAssociateRoles',fld:'vISAUTHORIZED_UAASSOCIATEROLES',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUAASSOCIATEROLES","Visible")',ctrl:'vUAASSOCIATEROLES',prop:'Visible'},{av:'AV95IsAuthorized_AsociarCorredor',fld:'vISAUTHORIZED_ASOCIARCORREDOR',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vASOCIARCORREDOR","Visible")',ctrl:'vASOCIARCORREDOR',prop:'Visible'},{ctrl:'BTNINSERT',prop:'Visible'},{av:'AV44ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV20GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["'ADDDYNAMICFILTERS1'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV25DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV26DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV27SecUserName1',fld:'vSECUSERNAME1',pic:''},{av:'AV91SecUserDescripcion1',fld:'vSECUSERDESCRIPCION1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV29DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV30DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV31SecUserName2',fld:'vSECUSERNAME2',pic:''},{av:'AV92SecUserDescripcion2',fld:'vSECUSERDESCRIPCION2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV33DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV34DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV35SecUserName3',fld:'vSECUSERNAME3',pic:''},{av:'AV93SecUserDescripcion3',fld:'vSECUSERDESCRIPCION3',pic:''},{av:'AV40ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV28DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV32DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV70ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV51TFSecUserName',fld:'vTFSECUSERNAME',pic:''},{av:'AV52TFSecUserName_Sel',fld:'vTFSECUSERNAME_SEL',pic:''},{av:'AV84TFSecUserDescripcion',fld:'vTFSECUSERDESCRIPCION',pic:''},{av:'AV85TFSecUserDescripcion_Sel',fld:'vTFSECUSERDESCRIPCION_SEL',pic:''},{av:'AV99TFSecUserCargaPolizas_Sel',fld:'vTFSECUSERCARGAPOLIZAS_SEL',pic:'9'},{av:'AV101TFSecUserMail',fld:'vTFSECUSERMAIL',pic:''},{av:'AV102TFSecUserMail_Sel',fld:'vTFSECUSERMAIL_SEL',pic:''},{av:'AV103TFSecUserKey',fld:'vTFSECUSERKEY',pic:''},{av:'AV104TFSecUserKey_Sel',fld:'vTFSECUSERKEY_SEL',pic:''},{av:'AV105TFSecUserToken',fld:'vTFSECUSERTOKEN',pic:''},{av:'AV106TFSecUserToken_Sel',fld:'vTFSECUSERTOKEN_SEL',pic:''},{av:'AV107TFSecUserTokenFecha',fld:'vTFSECUSERTOKENFECHA',pic:'99/99/9999 99:99:99.999'},{av:'AV108TFSecUserTokenFecha_To',fld:'vTFSECUSERTOKENFECHA_TO',pic:'99/99/9999 99:99:99.999'},{av:'AV142Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV23OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV24OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV20GridState',fld:'vGRIDSTATE',pic:''},{av:'AV37DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV36DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'gx.fn.getCtrlProperty("vUAASSOCIATEROLES","Title")',ctrl:'vUAASSOCIATEROLES',prop:'Title'},{av:'AV17IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV18IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV16IsAuthorized_UAAssociateRoles',fld:'vISAUTHORIZED_UAASSOCIATEROLES',pic:'',hsh:true},{av:'AV95IsAuthorized_AsociarCorredor',fld:'vISAUTHORIZED_ASOCIARCORREDOR',pic:'',hsh:true}],[{av:'AV28DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'},{av:'AV40ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV26DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV30DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV34DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV70ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("SECUSERNAME","Visible")',ctrl:'SECUSERNAME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERDESCRIPCION","Visible")',ctrl:'SECUSERDESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERCARGAPOLIZAS","Visible")',ctrl:'SECUSERCARGAPOLIZAS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERMAIL","Visible")',ctrl:'SECUSERMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERKEY","Visible")',ctrl:'SECUSERKEY',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERTOKEN","Visible")',ctrl:'SECUSERTOKEN',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERTOKENFECHA","Visible")',ctrl:'SECUSERTOKENFECHA',prop:'Visible'},{av:'AV79GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV80GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV17IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:'vUPDATE',prop:'Visible'},{av:'AV18IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:'vDELETE',prop:'Visible'},{av:'AV16IsAuthorized_UAAssociateRoles',fld:'vISAUTHORIZED_UAASSOCIATEROLES',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUAASSOCIATEROLES","Visible")',ctrl:'vUAASSOCIATEROLES',prop:'Visible'},{av:'AV95IsAuthorized_AsociarCorredor',fld:'vISAUTHORIZED_ASOCIARCORREDOR',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vASOCIARCORREDOR","Visible")',ctrl:'vASOCIARCORREDOR',prop:'Visible'},{ctrl:'BTNINSERT',prop:'Visible'},{av:'AV44ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV20GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["'REMOVEDYNAMICFILTERS1'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV25DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV26DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV27SecUserName1',fld:'vSECUSERNAME1',pic:''},{av:'AV91SecUserDescripcion1',fld:'vSECUSERDESCRIPCION1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV29DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV30DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV31SecUserName2',fld:'vSECUSERNAME2',pic:''},{av:'AV92SecUserDescripcion2',fld:'vSECUSERDESCRIPCION2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV33DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV34DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV35SecUserName3',fld:'vSECUSERNAME3',pic:''},{av:'AV93SecUserDescripcion3',fld:'vSECUSERDESCRIPCION3',pic:''},{av:'AV40ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV28DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV32DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV70ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV51TFSecUserName',fld:'vTFSECUSERNAME',pic:''},{av:'AV52TFSecUserName_Sel',fld:'vTFSECUSERNAME_SEL',pic:''},{av:'AV84TFSecUserDescripcion',fld:'vTFSECUSERDESCRIPCION',pic:''},{av:'AV85TFSecUserDescripcion_Sel',fld:'vTFSECUSERDESCRIPCION_SEL',pic:''},{av:'AV99TFSecUserCargaPolizas_Sel',fld:'vTFSECUSERCARGAPOLIZAS_SEL',pic:'9'},{av:'AV101TFSecUserMail',fld:'vTFSECUSERMAIL',pic:''},{av:'AV102TFSecUserMail_Sel',fld:'vTFSECUSERMAIL_SEL',pic:''},{av:'AV103TFSecUserKey',fld:'vTFSECUSERKEY',pic:''},{av:'AV104TFSecUserKey_Sel',fld:'vTFSECUSERKEY_SEL',pic:''},{av:'AV105TFSecUserToken',fld:'vTFSECUSERTOKEN',pic:''},{av:'AV106TFSecUserToken_Sel',fld:'vTFSECUSERTOKEN_SEL',pic:''},{av:'AV107TFSecUserTokenFecha',fld:'vTFSECUSERTOKENFECHA',pic:'99/99/9999 99:99:99.999'},{av:'AV108TFSecUserTokenFecha_To',fld:'vTFSECUSERTOKENFECHA_TO',pic:'99/99/9999 99:99:99.999'},{av:'AV142Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV23OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV24OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV20GridState',fld:'vGRIDSTATE',pic:''},{av:'AV37DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV36DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'gx.fn.getCtrlProperty("vUAASSOCIATEROLES","Title")',ctrl:'vUAASSOCIATEROLES',prop:'Title'},{av:'AV17IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV18IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV16IsAuthorized_UAAssociateRoles',fld:'vISAUTHORIZED_UAASSOCIATEROLES',pic:'',hsh:true},{av:'AV95IsAuthorized_AsociarCorredor',fld:'vISAUTHORIZED_ASOCIARCORREDOR',pic:'',hsh:true}],[{av:'AV36DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV37DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV20GridState',fld:'vGRIDSTATE',pic:''},{av:'AV28DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV29DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV30DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV31SecUserName2',fld:'vSECUSERNAME2',pic:''},{av:'AV32DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV33DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV34DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV35SecUserName3',fld:'vSECUSERNAME3',pic:''},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV25DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV26DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV27SecUserName1',fld:'vSECUSERNAME1',pic:''},{av:'AV91SecUserDescripcion1',fld:'vSECUSERDESCRIPCION1',pic:''},{av:'gx.fn.getCtrlProperty("JSDYNAMICFILTERS","Caption")',ctrl:'JSDYNAMICFILTERS',prop:'Caption'},{av:'AV92SecUserDescripcion2',fld:'vSECUSERDESCRIPCION2',pic:''},{av:'AV93SecUserDescripcion3',fld:'vSECUSERDESCRIPCION3',pic:''},{av:'gx.fn.getCtrlProperty("vSECUSERNAME2","Visible")',ctrl:'vSECUSERNAME2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERDESCRIPCION2","Visible")',ctrl:'vSECUSERDESCRIPCION2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME3","Visible")',ctrl:'vSECUSERNAME3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERDESCRIPCION3","Visible")',ctrl:'vSECUSERDESCRIPCION3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME1","Visible")',ctrl:'vSECUSERNAME1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERDESCRIPCION1","Visible")',ctrl:'vSECUSERDESCRIPCION1',prop:'Visible'},{av:'AV40ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV70ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("SECUSERNAME","Visible")',ctrl:'SECUSERNAME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERDESCRIPCION","Visible")',ctrl:'SECUSERDESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERCARGAPOLIZAS","Visible")',ctrl:'SECUSERCARGAPOLIZAS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERMAIL","Visible")',ctrl:'SECUSERMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERKEY","Visible")',ctrl:'SECUSERKEY',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERTOKEN","Visible")',ctrl:'SECUSERTOKEN',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERTOKENFECHA","Visible")',ctrl:'SECUSERTOKENFECHA',prop:'Visible'},{av:'AV79GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV80GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV17IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:'vUPDATE',prop:'Visible'},{av:'AV18IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:'vDELETE',prop:'Visible'},{av:'AV16IsAuthorized_UAAssociateRoles',fld:'vISAUTHORIZED_UAASSOCIATEROLES',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUAASSOCIATEROLES","Visible")',ctrl:'vUAASSOCIATEROLES',prop:'Visible'},{av:'AV95IsAuthorized_AsociarCorredor',fld:'vISAUTHORIZED_ASOCIARCORREDOR',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vASOCIARCORREDOR","Visible")',ctrl:'vASOCIARCORREDOR',prop:'Visible'},{ctrl:'BTNINSERT',prop:'Visible'},{av:'AV44ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''}]];
   this.EvtParms["VDYNAMICFILTERSSELECTOR1.CLICK"] = [[{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV25DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''}],[{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV26DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME1","Visible")',ctrl:'vSECUSERNAME1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERDESCRIPCION1","Visible")',ctrl:'vSECUSERDESCRIPCION1',prop:'Visible'}]];
   this.EvtParms["'ADDDYNAMICFILTERS2'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV25DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV26DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV27SecUserName1',fld:'vSECUSERNAME1',pic:''},{av:'AV91SecUserDescripcion1',fld:'vSECUSERDESCRIPCION1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV29DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV30DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV31SecUserName2',fld:'vSECUSERNAME2',pic:''},{av:'AV92SecUserDescripcion2',fld:'vSECUSERDESCRIPCION2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV33DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV34DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV35SecUserName3',fld:'vSECUSERNAME3',pic:''},{av:'AV93SecUserDescripcion3',fld:'vSECUSERDESCRIPCION3',pic:''},{av:'AV40ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV28DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV32DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV70ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV51TFSecUserName',fld:'vTFSECUSERNAME',pic:''},{av:'AV52TFSecUserName_Sel',fld:'vTFSECUSERNAME_SEL',pic:''},{av:'AV84TFSecUserDescripcion',fld:'vTFSECUSERDESCRIPCION',pic:''},{av:'AV85TFSecUserDescripcion_Sel',fld:'vTFSECUSERDESCRIPCION_SEL',pic:''},{av:'AV99TFSecUserCargaPolizas_Sel',fld:'vTFSECUSERCARGAPOLIZAS_SEL',pic:'9'},{av:'AV101TFSecUserMail',fld:'vTFSECUSERMAIL',pic:''},{av:'AV102TFSecUserMail_Sel',fld:'vTFSECUSERMAIL_SEL',pic:''},{av:'AV103TFSecUserKey',fld:'vTFSECUSERKEY',pic:''},{av:'AV104TFSecUserKey_Sel',fld:'vTFSECUSERKEY_SEL',pic:''},{av:'AV105TFSecUserToken',fld:'vTFSECUSERTOKEN',pic:''},{av:'AV106TFSecUserToken_Sel',fld:'vTFSECUSERTOKEN_SEL',pic:''},{av:'AV107TFSecUserTokenFecha',fld:'vTFSECUSERTOKENFECHA',pic:'99/99/9999 99:99:99.999'},{av:'AV108TFSecUserTokenFecha_To',fld:'vTFSECUSERTOKENFECHA_TO',pic:'99/99/9999 99:99:99.999'},{av:'AV142Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV23OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV24OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV20GridState',fld:'vGRIDSTATE',pic:''},{av:'AV37DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV36DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'gx.fn.getCtrlProperty("vUAASSOCIATEROLES","Title")',ctrl:'vUAASSOCIATEROLES',prop:'Title'},{av:'AV17IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV18IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV16IsAuthorized_UAAssociateRoles',fld:'vISAUTHORIZED_UAASSOCIATEROLES',pic:'',hsh:true},{av:'AV95IsAuthorized_AsociarCorredor',fld:'vISAUTHORIZED_ASOCIARCORREDOR',pic:'',hsh:true}],[{av:'AV32DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'},{av:'AV40ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV26DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV30DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV34DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV70ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("SECUSERNAME","Visible")',ctrl:'SECUSERNAME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERDESCRIPCION","Visible")',ctrl:'SECUSERDESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERCARGAPOLIZAS","Visible")',ctrl:'SECUSERCARGAPOLIZAS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERMAIL","Visible")',ctrl:'SECUSERMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERKEY","Visible")',ctrl:'SECUSERKEY',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERTOKEN","Visible")',ctrl:'SECUSERTOKEN',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERTOKENFECHA","Visible")',ctrl:'SECUSERTOKENFECHA',prop:'Visible'},{av:'AV79GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV80GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV17IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:'vUPDATE',prop:'Visible'},{av:'AV18IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:'vDELETE',prop:'Visible'},{av:'AV16IsAuthorized_UAAssociateRoles',fld:'vISAUTHORIZED_UAASSOCIATEROLES',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUAASSOCIATEROLES","Visible")',ctrl:'vUAASSOCIATEROLES',prop:'Visible'},{av:'AV95IsAuthorized_AsociarCorredor',fld:'vISAUTHORIZED_ASOCIARCORREDOR',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vASOCIARCORREDOR","Visible")',ctrl:'vASOCIARCORREDOR',prop:'Visible'},{ctrl:'BTNINSERT',prop:'Visible'},{av:'AV44ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV20GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["'REMOVEDYNAMICFILTERS2'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV25DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV26DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV27SecUserName1',fld:'vSECUSERNAME1',pic:''},{av:'AV91SecUserDescripcion1',fld:'vSECUSERDESCRIPCION1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV29DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV30DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV31SecUserName2',fld:'vSECUSERNAME2',pic:''},{av:'AV92SecUserDescripcion2',fld:'vSECUSERDESCRIPCION2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV33DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV34DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV35SecUserName3',fld:'vSECUSERNAME3',pic:''},{av:'AV93SecUserDescripcion3',fld:'vSECUSERDESCRIPCION3',pic:''},{av:'AV40ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV28DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV32DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV70ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV51TFSecUserName',fld:'vTFSECUSERNAME',pic:''},{av:'AV52TFSecUserName_Sel',fld:'vTFSECUSERNAME_SEL',pic:''},{av:'AV84TFSecUserDescripcion',fld:'vTFSECUSERDESCRIPCION',pic:''},{av:'AV85TFSecUserDescripcion_Sel',fld:'vTFSECUSERDESCRIPCION_SEL',pic:''},{av:'AV99TFSecUserCargaPolizas_Sel',fld:'vTFSECUSERCARGAPOLIZAS_SEL',pic:'9'},{av:'AV101TFSecUserMail',fld:'vTFSECUSERMAIL',pic:''},{av:'AV102TFSecUserMail_Sel',fld:'vTFSECUSERMAIL_SEL',pic:''},{av:'AV103TFSecUserKey',fld:'vTFSECUSERKEY',pic:''},{av:'AV104TFSecUserKey_Sel',fld:'vTFSECUSERKEY_SEL',pic:''},{av:'AV105TFSecUserToken',fld:'vTFSECUSERTOKEN',pic:''},{av:'AV106TFSecUserToken_Sel',fld:'vTFSECUSERTOKEN_SEL',pic:''},{av:'AV107TFSecUserTokenFecha',fld:'vTFSECUSERTOKENFECHA',pic:'99/99/9999 99:99:99.999'},{av:'AV108TFSecUserTokenFecha_To',fld:'vTFSECUSERTOKENFECHA_TO',pic:'99/99/9999 99:99:99.999'},{av:'AV142Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV23OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV24OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV20GridState',fld:'vGRIDSTATE',pic:''},{av:'AV37DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV36DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'gx.fn.getCtrlProperty("vUAASSOCIATEROLES","Title")',ctrl:'vUAASSOCIATEROLES',prop:'Title'},{av:'AV17IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV18IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV16IsAuthorized_UAAssociateRoles',fld:'vISAUTHORIZED_UAASSOCIATEROLES',pic:'',hsh:true},{av:'AV95IsAuthorized_AsociarCorredor',fld:'vISAUTHORIZED_ASOCIARCORREDOR',pic:'',hsh:true}],[{av:'AV36DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV28DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV20GridState',fld:'vGRIDSTATE',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV29DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV30DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV31SecUserName2',fld:'vSECUSERNAME2',pic:''},{av:'AV32DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV33DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV34DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV35SecUserName3',fld:'vSECUSERNAME3',pic:''},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV25DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV26DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV27SecUserName1',fld:'vSECUSERNAME1',pic:''},{av:'AV91SecUserDescripcion1',fld:'vSECUSERDESCRIPCION1',pic:''},{av:'gx.fn.getCtrlProperty("JSDYNAMICFILTERS","Caption")',ctrl:'JSDYNAMICFILTERS',prop:'Caption'},{av:'AV92SecUserDescripcion2',fld:'vSECUSERDESCRIPCION2',pic:''},{av:'AV93SecUserDescripcion3',fld:'vSECUSERDESCRIPCION3',pic:''},{av:'gx.fn.getCtrlProperty("vSECUSERNAME2","Visible")',ctrl:'vSECUSERNAME2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERDESCRIPCION2","Visible")',ctrl:'vSECUSERDESCRIPCION2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME3","Visible")',ctrl:'vSECUSERNAME3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERDESCRIPCION3","Visible")',ctrl:'vSECUSERDESCRIPCION3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME1","Visible")',ctrl:'vSECUSERNAME1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERDESCRIPCION1","Visible")',ctrl:'vSECUSERDESCRIPCION1',prop:'Visible'},{av:'AV40ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV70ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("SECUSERNAME","Visible")',ctrl:'SECUSERNAME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERDESCRIPCION","Visible")',ctrl:'SECUSERDESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERCARGAPOLIZAS","Visible")',ctrl:'SECUSERCARGAPOLIZAS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERMAIL","Visible")',ctrl:'SECUSERMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERKEY","Visible")',ctrl:'SECUSERKEY',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERTOKEN","Visible")',ctrl:'SECUSERTOKEN',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERTOKENFECHA","Visible")',ctrl:'SECUSERTOKENFECHA',prop:'Visible'},{av:'AV79GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV80GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV17IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:'vUPDATE',prop:'Visible'},{av:'AV18IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:'vDELETE',prop:'Visible'},{av:'AV16IsAuthorized_UAAssociateRoles',fld:'vISAUTHORIZED_UAASSOCIATEROLES',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUAASSOCIATEROLES","Visible")',ctrl:'vUAASSOCIATEROLES',prop:'Visible'},{av:'AV95IsAuthorized_AsociarCorredor',fld:'vISAUTHORIZED_ASOCIARCORREDOR',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vASOCIARCORREDOR","Visible")',ctrl:'vASOCIARCORREDOR',prop:'Visible'},{ctrl:'BTNINSERT',prop:'Visible'},{av:'AV44ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''}]];
   this.EvtParms["VDYNAMICFILTERSSELECTOR2.CLICK"] = [[{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV29DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''}],[{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV30DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME2","Visible")',ctrl:'vSECUSERNAME2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERDESCRIPCION2","Visible")',ctrl:'vSECUSERDESCRIPCION2',prop:'Visible'}]];
   this.EvtParms["'REMOVEDYNAMICFILTERS3'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV25DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV26DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV27SecUserName1',fld:'vSECUSERNAME1',pic:''},{av:'AV91SecUserDescripcion1',fld:'vSECUSERDESCRIPCION1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV29DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV30DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV31SecUserName2',fld:'vSECUSERNAME2',pic:''},{av:'AV92SecUserDescripcion2',fld:'vSECUSERDESCRIPCION2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV33DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV34DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV35SecUserName3',fld:'vSECUSERNAME3',pic:''},{av:'AV93SecUserDescripcion3',fld:'vSECUSERDESCRIPCION3',pic:''},{av:'AV40ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV28DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV32DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV70ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV51TFSecUserName',fld:'vTFSECUSERNAME',pic:''},{av:'AV52TFSecUserName_Sel',fld:'vTFSECUSERNAME_SEL',pic:''},{av:'AV84TFSecUserDescripcion',fld:'vTFSECUSERDESCRIPCION',pic:''},{av:'AV85TFSecUserDescripcion_Sel',fld:'vTFSECUSERDESCRIPCION_SEL',pic:''},{av:'AV99TFSecUserCargaPolizas_Sel',fld:'vTFSECUSERCARGAPOLIZAS_SEL',pic:'9'},{av:'AV101TFSecUserMail',fld:'vTFSECUSERMAIL',pic:''},{av:'AV102TFSecUserMail_Sel',fld:'vTFSECUSERMAIL_SEL',pic:''},{av:'AV103TFSecUserKey',fld:'vTFSECUSERKEY',pic:''},{av:'AV104TFSecUserKey_Sel',fld:'vTFSECUSERKEY_SEL',pic:''},{av:'AV105TFSecUserToken',fld:'vTFSECUSERTOKEN',pic:''},{av:'AV106TFSecUserToken_Sel',fld:'vTFSECUSERTOKEN_SEL',pic:''},{av:'AV107TFSecUserTokenFecha',fld:'vTFSECUSERTOKENFECHA',pic:'99/99/9999 99:99:99.999'},{av:'AV108TFSecUserTokenFecha_To',fld:'vTFSECUSERTOKENFECHA_TO',pic:'99/99/9999 99:99:99.999'},{av:'AV142Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV23OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV24OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV20GridState',fld:'vGRIDSTATE',pic:''},{av:'AV37DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV36DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'gx.fn.getCtrlProperty("vUAASSOCIATEROLES","Title")',ctrl:'vUAASSOCIATEROLES',prop:'Title'},{av:'AV17IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV18IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV16IsAuthorized_UAAssociateRoles',fld:'vISAUTHORIZED_UAASSOCIATEROLES',pic:'',hsh:true},{av:'AV95IsAuthorized_AsociarCorredor',fld:'vISAUTHORIZED_ASOCIARCORREDOR',pic:'',hsh:true}],[{av:'AV36DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV32DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV20GridState',fld:'vGRIDSTATE',pic:''},{av:'AV28DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV29DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV30DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV31SecUserName2',fld:'vSECUSERNAME2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV33DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV34DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV35SecUserName3',fld:'vSECUSERNAME3',pic:''},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV25DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV26DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV27SecUserName1',fld:'vSECUSERNAME1',pic:''},{av:'AV91SecUserDescripcion1',fld:'vSECUSERDESCRIPCION1',pic:''},{av:'gx.fn.getCtrlProperty("JSDYNAMICFILTERS","Caption")',ctrl:'JSDYNAMICFILTERS',prop:'Caption'},{av:'AV92SecUserDescripcion2',fld:'vSECUSERDESCRIPCION2',pic:''},{av:'AV93SecUserDescripcion3',fld:'vSECUSERDESCRIPCION3',pic:''},{av:'gx.fn.getCtrlProperty("vSECUSERNAME2","Visible")',ctrl:'vSECUSERNAME2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERDESCRIPCION2","Visible")',ctrl:'vSECUSERDESCRIPCION2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME3","Visible")',ctrl:'vSECUSERNAME3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERDESCRIPCION3","Visible")',ctrl:'vSECUSERDESCRIPCION3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME1","Visible")',ctrl:'vSECUSERNAME1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERDESCRIPCION1","Visible")',ctrl:'vSECUSERDESCRIPCION1',prop:'Visible'},{av:'AV40ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV70ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("SECUSERNAME","Visible")',ctrl:'SECUSERNAME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERDESCRIPCION","Visible")',ctrl:'SECUSERDESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERCARGAPOLIZAS","Visible")',ctrl:'SECUSERCARGAPOLIZAS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERMAIL","Visible")',ctrl:'SECUSERMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERKEY","Visible")',ctrl:'SECUSERKEY',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERTOKEN","Visible")',ctrl:'SECUSERTOKEN',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERTOKENFECHA","Visible")',ctrl:'SECUSERTOKENFECHA',prop:'Visible'},{av:'AV79GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV80GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV17IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:'vUPDATE',prop:'Visible'},{av:'AV18IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:'vDELETE',prop:'Visible'},{av:'AV16IsAuthorized_UAAssociateRoles',fld:'vISAUTHORIZED_UAASSOCIATEROLES',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUAASSOCIATEROLES","Visible")',ctrl:'vUAASSOCIATEROLES',prop:'Visible'},{av:'AV95IsAuthorized_AsociarCorredor',fld:'vISAUTHORIZED_ASOCIARCORREDOR',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vASOCIARCORREDOR","Visible")',ctrl:'vASOCIARCORREDOR',prop:'Visible'},{ctrl:'BTNINSERT',prop:'Visible'},{av:'AV44ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''}]];
   this.EvtParms["VDYNAMICFILTERSSELECTOR3.CLICK"] = [[{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV33DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''}],[{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV34DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME3","Visible")',ctrl:'vSECUSERNAME3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERDESCRIPCION3","Visible")',ctrl:'vSECUSERDESCRIPCION3',prop:'Visible'}]];
   this.EvtParms["DDO_MANAGEFILTERS.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV25DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV26DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV27SecUserName1',fld:'vSECUSERNAME1',pic:''},{av:'AV91SecUserDescripcion1',fld:'vSECUSERDESCRIPCION1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV29DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV30DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV31SecUserName2',fld:'vSECUSERNAME2',pic:''},{av:'AV92SecUserDescripcion2',fld:'vSECUSERDESCRIPCION2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV33DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV34DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV35SecUserName3',fld:'vSECUSERNAME3',pic:''},{av:'AV93SecUserDescripcion3',fld:'vSECUSERDESCRIPCION3',pic:''},{av:'AV40ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV28DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV32DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV70ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV51TFSecUserName',fld:'vTFSECUSERNAME',pic:''},{av:'AV52TFSecUserName_Sel',fld:'vTFSECUSERNAME_SEL',pic:''},{av:'AV84TFSecUserDescripcion',fld:'vTFSECUSERDESCRIPCION',pic:''},{av:'AV85TFSecUserDescripcion_Sel',fld:'vTFSECUSERDESCRIPCION_SEL',pic:''},{av:'AV99TFSecUserCargaPolizas_Sel',fld:'vTFSECUSERCARGAPOLIZAS_SEL',pic:'9'},{av:'AV101TFSecUserMail',fld:'vTFSECUSERMAIL',pic:''},{av:'AV102TFSecUserMail_Sel',fld:'vTFSECUSERMAIL_SEL',pic:''},{av:'AV103TFSecUserKey',fld:'vTFSECUSERKEY',pic:''},{av:'AV104TFSecUserKey_Sel',fld:'vTFSECUSERKEY_SEL',pic:''},{av:'AV105TFSecUserToken',fld:'vTFSECUSERTOKEN',pic:''},{av:'AV106TFSecUserToken_Sel',fld:'vTFSECUSERTOKEN_SEL',pic:''},{av:'AV107TFSecUserTokenFecha',fld:'vTFSECUSERTOKENFECHA',pic:'99/99/9999 99:99:99.999'},{av:'AV108TFSecUserTokenFecha_To',fld:'vTFSECUSERTOKENFECHA_TO',pic:'99/99/9999 99:99:99.999'},{av:'AV142Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV23OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV24OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV20GridState',fld:'vGRIDSTATE',pic:''},{av:'AV37DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV36DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'gx.fn.getCtrlProperty("vUAASSOCIATEROLES","Title")',ctrl:'vUAASSOCIATEROLES',prop:'Title'},{av:'AV17IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV18IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV16IsAuthorized_UAAssociateRoles',fld:'vISAUTHORIZED_UAASSOCIATEROLES',pic:'',hsh:true},{av:'AV95IsAuthorized_AsociarCorredor',fld:'vISAUTHORIZED_ASOCIARCORREDOR',pic:'',hsh:true},{av:'this.DDO_MANAGEFILTERSContainer.ActiveEventKey',ctrl:'DDO_MANAGEFILTERS',prop:'ActiveEventKey'},{av:'AV109DDO_SecUserTokenFechaAuxDate',fld:'vDDO_SECUSERTOKENFECHAAUXDATE',pic:''},{av:'AV110DDO_SecUserTokenFechaAuxDateTo',fld:'vDDO_SECUSERTOKENFECHAAUXDATETO',pic:''}],[{av:'AV40ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV20GridState',fld:'vGRIDSTATE',pic:''},{av:'AV23OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV24OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV51TFSecUserName',fld:'vTFSECUSERNAME',pic:''},{av:'AV52TFSecUserName_Sel',fld:'vTFSECUSERNAME_SEL',pic:''},{av:'AV84TFSecUserDescripcion',fld:'vTFSECUSERDESCRIPCION',pic:''},{av:'AV85TFSecUserDescripcion_Sel',fld:'vTFSECUSERDESCRIPCION_SEL',pic:''},{av:'AV99TFSecUserCargaPolizas_Sel',fld:'vTFSECUSERCARGAPOLIZAS_SEL',pic:'9'},{av:'AV101TFSecUserMail',fld:'vTFSECUSERMAIL',pic:''},{av:'AV102TFSecUserMail_Sel',fld:'vTFSECUSERMAIL_SEL',pic:''},{av:'AV103TFSecUserKey',fld:'vTFSECUSERKEY',pic:''},{av:'AV104TFSecUserKey_Sel',fld:'vTFSECUSERKEY_SEL',pic:''},{av:'AV105TFSecUserToken',fld:'vTFSECUSERTOKEN',pic:''},{av:'AV106TFSecUserToken_Sel',fld:'vTFSECUSERTOKEN_SEL',pic:''},{av:'AV107TFSecUserTokenFecha',fld:'vTFSECUSERTOKENFECHA',pic:'99/99/9999 99:99:99.999'},{av:'AV108TFSecUserTokenFecha_To',fld:'vTFSECUSERTOKENFECHA_TO',pic:'99/99/9999 99:99:99.999'},{av:'this.DDO_GRIDContainer.SelectedValue_set',ctrl:'DDO_GRID',prop:'SelectedValue_set'},{av:'this.DDO_GRIDContainer.FilteredText_set',ctrl:'DDO_GRID',prop:'FilteredText_set'},{av:'this.DDO_GRIDContainer.FilteredTextTo_set',ctrl:'DDO_GRID',prop:'FilteredTextTo_set'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV25DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV26DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV27SecUserName1',fld:'vSECUSERNAME1',pic:''},{av:'this.DDO_GRIDContainer.SortedStatus',ctrl:'DDO_GRID',prop:'SortedStatus'},{av:'AV109DDO_SecUserTokenFechaAuxDate',fld:'vDDO_SECUSERTOKENFECHAAUXDATE',pic:''},{av:'AV110DDO_SecUserTokenFechaAuxDateTo',fld:'vDDO_SECUSERTOKENFECHAAUXDATETO',pic:''},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'},{av:'AV91SecUserDescripcion1',fld:'vSECUSERDESCRIPCION1',pic:''},{av:'gx.fn.getCtrlProperty("JSDYNAMICFILTERS","Caption")',ctrl:'JSDYNAMICFILTERS',prop:'Caption'},{av:'AV28DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV29DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV30DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV31SecUserName2',fld:'vSECUSERNAME2',pic:''},{av:'AV92SecUserDescripcion2',fld:'vSECUSERDESCRIPCION2',pic:''},{av:'AV32DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV33DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV34DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV35SecUserName3',fld:'vSECUSERNAME3',pic:''},{av:'AV93SecUserDescripcion3',fld:'vSECUSERDESCRIPCION3',pic:''},{av:'gx.fn.getCtrlProperty("vSECUSERNAME1","Visible")',ctrl:'vSECUSERNAME1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERDESCRIPCION1","Visible")',ctrl:'vSECUSERDESCRIPCION1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME2","Visible")',ctrl:'vSECUSERNAME2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERDESCRIPCION2","Visible")',ctrl:'vSECUSERDESCRIPCION2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME3","Visible")',ctrl:'vSECUSERNAME3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERDESCRIPCION3","Visible")',ctrl:'vSECUSERDESCRIPCION3',prop:'Visible'},{av:'AV70ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("SECUSERNAME","Visible")',ctrl:'SECUSERNAME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERDESCRIPCION","Visible")',ctrl:'SECUSERDESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERCARGAPOLIZAS","Visible")',ctrl:'SECUSERCARGAPOLIZAS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERMAIL","Visible")',ctrl:'SECUSERMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERKEY","Visible")',ctrl:'SECUSERKEY',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERTOKEN","Visible")',ctrl:'SECUSERTOKEN',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERTOKENFECHA","Visible")',ctrl:'SECUSERTOKENFECHA',prop:'Visible'},{av:'AV79GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV80GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV17IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:'vUPDATE',prop:'Visible'},{av:'AV18IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:'vDELETE',prop:'Visible'},{av:'AV16IsAuthorized_UAAssociateRoles',fld:'vISAUTHORIZED_UAASSOCIATEROLES',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUAASSOCIATEROLES","Visible")',ctrl:'vUAASSOCIATEROLES',prop:'Visible'},{av:'AV95IsAuthorized_AsociarCorredor',fld:'vISAUTHORIZED_ASOCIARCORREDOR',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vASOCIARCORREDOR","Visible")',ctrl:'vASOCIARCORREDOR',prop:'Visible'},{ctrl:'BTNINSERT',prop:'Visible'},{av:'AV44ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''}]];
   this.EvtParms["'DOINSERT'"] = [[{av:'A141SecUserId',fld:'SECUSERID',pic:'ZZZ9',hsh:true}],[]];
   this.EvtParms["'DOEXPORT'"] = [[{av:'AV142Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV23OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV24OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV20GridState',fld:'vGRIDSTATE',pic:''},{av:'AV52TFSecUserName_Sel',fld:'vTFSECUSERNAME_SEL',pic:''},{av:'AV85TFSecUserDescripcion_Sel',fld:'vTFSECUSERDESCRIPCION_SEL',pic:''},{av:'AV99TFSecUserCargaPolizas_Sel',fld:'vTFSECUSERCARGAPOLIZAS_SEL',pic:'9'},{av:'AV102TFSecUserMail_Sel',fld:'vTFSECUSERMAIL_SEL',pic:''},{av:'AV104TFSecUserKey_Sel',fld:'vTFSECUSERKEY_SEL',pic:''},{av:'AV106TFSecUserToken_Sel',fld:'vTFSECUSERTOKEN_SEL',pic:''},{av:'AV51TFSecUserName',fld:'vTFSECUSERNAME',pic:''},{av:'AV84TFSecUserDescripcion',fld:'vTFSECUSERDESCRIPCION',pic:''},{av:'AV101TFSecUserMail',fld:'vTFSECUSERMAIL',pic:''},{av:'AV103TFSecUserKey',fld:'vTFSECUSERKEY',pic:''},{av:'AV105TFSecUserToken',fld:'vTFSECUSERTOKEN',pic:''},{av:'AV107TFSecUserTokenFecha',fld:'vTFSECUSERTOKENFECHA',pic:'99/99/9999 99:99:99.999'},{av:'AV109DDO_SecUserTokenFechaAuxDate',fld:'vDDO_SECUSERTOKENFECHAAUXDATE',pic:''},{av:'AV108TFSecUserTokenFecha_To',fld:'vTFSECUSERTOKENFECHA_TO',pic:'99/99/9999 99:99:99.999'},{av:'AV110DDO_SecUserTokenFechaAuxDateTo',fld:'vDDO_SECUSERTOKENFECHAAUXDATETO',pic:''},{av:'AV36DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV25DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV29DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV33DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''}],[{av:'AV20GridState',fld:'vGRIDSTATE',pic:''},{av:'AV23OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV24OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV25DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV26DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV27SecUserName1',fld:'vSECUSERNAME1',pic:''},{av:'AV91SecUserDescripcion1',fld:'vSECUSERDESCRIPCION1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV29DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV30DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV31SecUserName2',fld:'vSECUSERNAME2',pic:''},{av:'AV92SecUserDescripcion2',fld:'vSECUSERDESCRIPCION2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV33DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV34DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV35SecUserName3',fld:'vSECUSERNAME3',pic:''},{av:'AV93SecUserDescripcion3',fld:'vSECUSERDESCRIPCION3',pic:''},{av:'AV40ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV28DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV32DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV70ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV51TFSecUserName',fld:'vTFSECUSERNAME',pic:''},{av:'AV52TFSecUserName_Sel',fld:'vTFSECUSERNAME_SEL',pic:''},{av:'AV84TFSecUserDescripcion',fld:'vTFSECUSERDESCRIPCION',pic:''},{av:'AV85TFSecUserDescripcion_Sel',fld:'vTFSECUSERDESCRIPCION_SEL',pic:''},{av:'AV99TFSecUserCargaPolizas_Sel',fld:'vTFSECUSERCARGAPOLIZAS_SEL',pic:'9'},{av:'AV101TFSecUserMail',fld:'vTFSECUSERMAIL',pic:''},{av:'AV102TFSecUserMail_Sel',fld:'vTFSECUSERMAIL_SEL',pic:''},{av:'AV103TFSecUserKey',fld:'vTFSECUSERKEY',pic:''},{av:'AV104TFSecUserKey_Sel',fld:'vTFSECUSERKEY_SEL',pic:''},{av:'AV105TFSecUserToken',fld:'vTFSECUSERTOKEN',pic:''},{av:'AV106TFSecUserToken_Sel',fld:'vTFSECUSERTOKEN_SEL',pic:''},{av:'AV107TFSecUserTokenFecha',fld:'vTFSECUSERTOKENFECHA',pic:'99/99/9999 99:99:99.999'},{av:'AV108TFSecUserTokenFecha_To',fld:'vTFSECUSERTOKENFECHA_TO',pic:'99/99/9999 99:99:99.999'},{av:'AV142Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV37DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV36DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'gx.fn.getCtrlProperty("vUAASSOCIATEROLES","Title")',ctrl:'vUAASSOCIATEROLES',prop:'Title'},{av:'AV17IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV18IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV16IsAuthorized_UAAssociateRoles',fld:'vISAUTHORIZED_UAASSOCIATEROLES',pic:'',hsh:true},{av:'AV95IsAuthorized_AsociarCorredor',fld:'vISAUTHORIZED_ASOCIARCORREDOR',pic:'',hsh:true},{av:'this.DDO_GRIDContainer.SortedStatus',ctrl:'DDO_GRID',prop:'SortedStatus'},{av:'AV109DDO_SecUserTokenFechaAuxDate',fld:'vDDO_SECUSERTOKENFECHAAUXDATE',pic:''},{av:'AV110DDO_SecUserTokenFechaAuxDateTo',fld:'vDDO_SECUSERTOKENFECHAAUXDATETO',pic:''},{av:'this.DDO_GRIDContainer.SelectedValue_set',ctrl:'DDO_GRID',prop:'SelectedValue_set'},{av:'this.DDO_GRIDContainer.FilteredText_set',ctrl:'DDO_GRID',prop:'FilteredText_set'},{av:'this.DDO_GRIDContainer.FilteredTextTo_set',ctrl:'DDO_GRID',prop:'FilteredTextTo_set'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("JSDYNAMICFILTERS","Caption")',ctrl:'JSDYNAMICFILTERS',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME1","Visible")',ctrl:'vSECUSERNAME1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERDESCRIPCION1","Visible")',ctrl:'vSECUSERDESCRIPCION1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME2","Visible")',ctrl:'vSECUSERNAME2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERDESCRIPCION2","Visible")',ctrl:'vSECUSERDESCRIPCION2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME3","Visible")',ctrl:'vSECUSERNAME3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERDESCRIPCION3","Visible")',ctrl:'vSECUSERDESCRIPCION3',prop:'Visible'}]];
   this.EvtParms["'DOEXPORTREPORT'"] = [[{av:'AV142Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV23OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV24OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV20GridState',fld:'vGRIDSTATE',pic:''},{av:'AV52TFSecUserName_Sel',fld:'vTFSECUSERNAME_SEL',pic:''},{av:'AV85TFSecUserDescripcion_Sel',fld:'vTFSECUSERDESCRIPCION_SEL',pic:''},{av:'AV99TFSecUserCargaPolizas_Sel',fld:'vTFSECUSERCARGAPOLIZAS_SEL',pic:'9'},{av:'AV102TFSecUserMail_Sel',fld:'vTFSECUSERMAIL_SEL',pic:''},{av:'AV104TFSecUserKey_Sel',fld:'vTFSECUSERKEY_SEL',pic:''},{av:'AV106TFSecUserToken_Sel',fld:'vTFSECUSERTOKEN_SEL',pic:''},{av:'AV51TFSecUserName',fld:'vTFSECUSERNAME',pic:''},{av:'AV84TFSecUserDescripcion',fld:'vTFSECUSERDESCRIPCION',pic:''},{av:'AV101TFSecUserMail',fld:'vTFSECUSERMAIL',pic:''},{av:'AV103TFSecUserKey',fld:'vTFSECUSERKEY',pic:''},{av:'AV105TFSecUserToken',fld:'vTFSECUSERTOKEN',pic:''},{av:'AV107TFSecUserTokenFecha',fld:'vTFSECUSERTOKENFECHA',pic:'99/99/9999 99:99:99.999'},{av:'AV109DDO_SecUserTokenFechaAuxDate',fld:'vDDO_SECUSERTOKENFECHAAUXDATE',pic:''},{av:'AV108TFSecUserTokenFecha_To',fld:'vTFSECUSERTOKENFECHA_TO',pic:'99/99/9999 99:99:99.999'},{av:'AV110DDO_SecUserTokenFechaAuxDateTo',fld:'vDDO_SECUSERTOKENFECHAAUXDATETO',pic:''},{av:'AV36DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV25DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV29DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV33DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''}],[{av:'this.INNEWWINDOW1Container.Target',ctrl:'INNEWWINDOW1',prop:'Target'},{av:'this.INNEWWINDOW1Container.Height',ctrl:'INNEWWINDOW1',prop:'Height'},{av:'this.INNEWWINDOW1Container.Width',ctrl:'INNEWWINDOW1',prop:'Width'},{av:'AV20GridState',fld:'vGRIDSTATE',pic:''},{av:'AV23OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV24OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV25DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV26DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV27SecUserName1',fld:'vSECUSERNAME1',pic:''},{av:'AV91SecUserDescripcion1',fld:'vSECUSERDESCRIPCION1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV29DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV30DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV31SecUserName2',fld:'vSECUSERNAME2',pic:''},{av:'AV92SecUserDescripcion2',fld:'vSECUSERDESCRIPCION2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV33DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV34DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV35SecUserName3',fld:'vSECUSERNAME3',pic:''},{av:'AV93SecUserDescripcion3',fld:'vSECUSERDESCRIPCION3',pic:''},{av:'AV40ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV28DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV32DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV70ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV51TFSecUserName',fld:'vTFSECUSERNAME',pic:''},{av:'AV52TFSecUserName_Sel',fld:'vTFSECUSERNAME_SEL',pic:''},{av:'AV84TFSecUserDescripcion',fld:'vTFSECUSERDESCRIPCION',pic:''},{av:'AV85TFSecUserDescripcion_Sel',fld:'vTFSECUSERDESCRIPCION_SEL',pic:''},{av:'AV99TFSecUserCargaPolizas_Sel',fld:'vTFSECUSERCARGAPOLIZAS_SEL',pic:'9'},{av:'AV101TFSecUserMail',fld:'vTFSECUSERMAIL',pic:''},{av:'AV102TFSecUserMail_Sel',fld:'vTFSECUSERMAIL_SEL',pic:''},{av:'AV103TFSecUserKey',fld:'vTFSECUSERKEY',pic:''},{av:'AV104TFSecUserKey_Sel',fld:'vTFSECUSERKEY_SEL',pic:''},{av:'AV105TFSecUserToken',fld:'vTFSECUSERTOKEN',pic:''},{av:'AV106TFSecUserToken_Sel',fld:'vTFSECUSERTOKEN_SEL',pic:''},{av:'AV107TFSecUserTokenFecha',fld:'vTFSECUSERTOKENFECHA',pic:'99/99/9999 99:99:99.999'},{av:'AV108TFSecUserTokenFecha_To',fld:'vTFSECUSERTOKENFECHA_TO',pic:'99/99/9999 99:99:99.999'},{av:'AV142Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV37DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV36DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'gx.fn.getCtrlProperty("vUAASSOCIATEROLES","Title")',ctrl:'vUAASSOCIATEROLES',prop:'Title'},{av:'AV17IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV18IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV16IsAuthorized_UAAssociateRoles',fld:'vISAUTHORIZED_UAASSOCIATEROLES',pic:'',hsh:true},{av:'AV95IsAuthorized_AsociarCorredor',fld:'vISAUTHORIZED_ASOCIARCORREDOR',pic:'',hsh:true},{av:'this.DDO_GRIDContainer.SortedStatus',ctrl:'DDO_GRID',prop:'SortedStatus'},{av:'AV109DDO_SecUserTokenFechaAuxDate',fld:'vDDO_SECUSERTOKENFECHAAUXDATE',pic:''},{av:'AV110DDO_SecUserTokenFechaAuxDateTo',fld:'vDDO_SECUSERTOKENFECHAAUXDATETO',pic:''},{av:'this.DDO_GRIDContainer.SelectedValue_set',ctrl:'DDO_GRID',prop:'SelectedValue_set'},{av:'this.DDO_GRIDContainer.FilteredText_set',ctrl:'DDO_GRID',prop:'FilteredText_set'},{av:'this.DDO_GRIDContainer.FilteredTextTo_set',ctrl:'DDO_GRID',prop:'FilteredTextTo_set'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("JSDYNAMICFILTERS","Caption")',ctrl:'JSDYNAMICFILTERS',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME1","Visible")',ctrl:'vSECUSERNAME1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERDESCRIPCION1","Visible")',ctrl:'vSECUSERDESCRIPCION1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME2","Visible")',ctrl:'vSECUSERNAME2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERDESCRIPCION2","Visible")',ctrl:'vSECUSERDESCRIPCION2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME3","Visible")',ctrl:'vSECUSERNAME3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERDESCRIPCION3","Visible")',ctrl:'vSECUSERDESCRIPCION3',prop:'Visible'}]];
   this.EvtParms["VALIDV_DDO_SECUSERTOKENFECHAAUXDATE"] = [[],[]];
   this.EvtParms["VALIDV_DDO_SECUSERTOKENFECHAAUXDATETO"] = [[],[]];
   this.setVCMap("AV40ManageFiltersExecutionStep", "vMANAGEFILTERSEXECUTIONSTEP", 0, "int", 1, 0);
   this.setVCMap("AV28DynamicFiltersEnabled2", "vDYNAMICFILTERSENABLED2", 0, "boolean", 4, 0);
   this.setVCMap("AV32DynamicFiltersEnabled3", "vDYNAMICFILTERSENABLED3", 0, "boolean", 4, 0);
   this.setVCMap("AV70ColumnsSelector", "vCOLUMNSSELECTOR", 0, "WWPBaseObjects\WWPColumnsSelector", 0, 0);
   this.setVCMap("AV51TFSecUserName", "vTFSECUSERNAME", 0, "svchar", 100, 0);
   this.setVCMap("AV52TFSecUserName_Sel", "vTFSECUSERNAME_SEL", 0, "svchar", 100, 0);
   this.setVCMap("AV84TFSecUserDescripcion", "vTFSECUSERDESCRIPCION", 0, "svchar", 100, 0);
   this.setVCMap("AV85TFSecUserDescripcion_Sel", "vTFSECUSERDESCRIPCION_SEL", 0, "svchar", 100, 0);
   this.setVCMap("AV99TFSecUserCargaPolizas_Sel", "vTFSECUSERCARGAPOLIZAS_SEL", 0, "int", 1, 0);
   this.setVCMap("AV101TFSecUserMail", "vTFSECUSERMAIL", 0, "svchar", 100, 0);
   this.setVCMap("AV102TFSecUserMail_Sel", "vTFSECUSERMAIL_SEL", 0, "svchar", 100, 0);
   this.setVCMap("AV103TFSecUserKey", "vTFSECUSERKEY", 0, "svchar", 400, 0);
   this.setVCMap("AV104TFSecUserKey_Sel", "vTFSECUSERKEY_SEL", 0, "svchar", 400, 0);
   this.setVCMap("AV105TFSecUserToken", "vTFSECUSERTOKEN", 0, "svchar", 400, 0);
   this.setVCMap("AV106TFSecUserToken_Sel", "vTFSECUSERTOKEN_SEL", 0, "svchar", 400, 0);
   this.setVCMap("AV107TFSecUserTokenFecha", "vTFSECUSERTOKENFECHA", 0, "dtime", 10, 12);
   this.setVCMap("AV108TFSecUserTokenFecha_To", "vTFSECUSERTOKENFECHA_TO", 0, "dtime", 10, 12);
   this.setVCMap("AV142Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV23OrderedBy", "vORDEREDBY", 0, "int", 4, 0);
   this.setVCMap("AV24OrderedDsc", "vORDEREDDSC", 0, "boolean", 4, 0);
   this.setVCMap("AV20GridState", "vGRIDSTATE", 0, "WWPBaseObjects\WWPGridState", 0, 0);
   this.setVCMap("AV37DynamicFiltersIgnoreFirst", "vDYNAMICFILTERSIGNOREFIRST", 0, "boolean", 4, 0);
   this.setVCMap("AV36DynamicFiltersRemoving", "vDYNAMICFILTERSREMOVING", 0, "boolean", 4, 0);
   this.setVCMap("AV17IsAuthorized_Update", "vISAUTHORIZED_UPDATE", 0, "boolean", 4, 0);
   this.setVCMap("AV18IsAuthorized_Delete", "vISAUTHORIZED_DELETE", 0, "boolean", 4, 0);
   this.setVCMap("AV16IsAuthorized_UAAssociateRoles", "vISAUTHORIZED_UAASSOCIATEROLES", 0, "boolean", 4, 0);
   this.setVCMap("AV95IsAuthorized_AsociarCorredor", "vISAUTHORIZED_ASOCIARCORREDOR", 0, "boolean", 4, 0);
   this.setVCMap("AV40ManageFiltersExecutionStep", "vMANAGEFILTERSEXECUTIONSTEP", 0, "int", 1, 0);
   this.setVCMap("AV28DynamicFiltersEnabled2", "vDYNAMICFILTERSENABLED2", 0, "boolean", 4, 0);
   this.setVCMap("AV32DynamicFiltersEnabled3", "vDYNAMICFILTERSENABLED3", 0, "boolean", 4, 0);
   this.setVCMap("AV70ColumnsSelector", "vCOLUMNSSELECTOR", 0, "WWPBaseObjects\WWPColumnsSelector", 0, 0);
   this.setVCMap("AV51TFSecUserName", "vTFSECUSERNAME", 0, "svchar", 100, 0);
   this.setVCMap("AV52TFSecUserName_Sel", "vTFSECUSERNAME_SEL", 0, "svchar", 100, 0);
   this.setVCMap("AV84TFSecUserDescripcion", "vTFSECUSERDESCRIPCION", 0, "svchar", 100, 0);
   this.setVCMap("AV85TFSecUserDescripcion_Sel", "vTFSECUSERDESCRIPCION_SEL", 0, "svchar", 100, 0);
   this.setVCMap("AV99TFSecUserCargaPolizas_Sel", "vTFSECUSERCARGAPOLIZAS_SEL", 0, "int", 1, 0);
   this.setVCMap("AV101TFSecUserMail", "vTFSECUSERMAIL", 0, "svchar", 100, 0);
   this.setVCMap("AV102TFSecUserMail_Sel", "vTFSECUSERMAIL_SEL", 0, "svchar", 100, 0);
   this.setVCMap("AV103TFSecUserKey", "vTFSECUSERKEY", 0, "svchar", 400, 0);
   this.setVCMap("AV104TFSecUserKey_Sel", "vTFSECUSERKEY_SEL", 0, "svchar", 400, 0);
   this.setVCMap("AV105TFSecUserToken", "vTFSECUSERTOKEN", 0, "svchar", 400, 0);
   this.setVCMap("AV106TFSecUserToken_Sel", "vTFSECUSERTOKEN_SEL", 0, "svchar", 400, 0);
   this.setVCMap("AV107TFSecUserTokenFecha", "vTFSECUSERTOKENFECHA", 0, "dtime", 10, 12);
   this.setVCMap("AV108TFSecUserTokenFecha_To", "vTFSECUSERTOKENFECHA_TO", 0, "dtime", 10, 12);
   this.setVCMap("AV142Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV23OrderedBy", "vORDEREDBY", 0, "int", 4, 0);
   this.setVCMap("AV24OrderedDsc", "vORDEREDDSC", 0, "boolean", 4, 0);
   this.setVCMap("AV20GridState", "vGRIDSTATE", 0, "WWPBaseObjects\WWPGridState", 0, 0);
   this.setVCMap("AV37DynamicFiltersIgnoreFirst", "vDYNAMICFILTERSIGNOREFIRST", 0, "boolean", 4, 0);
   this.setVCMap("AV36DynamicFiltersRemoving", "vDYNAMICFILTERSREMOVING", 0, "boolean", 4, 0);
   this.setVCMap("AV17IsAuthorized_Update", "vISAUTHORIZED_UPDATE", 0, "boolean", 4, 0);
   this.setVCMap("AV18IsAuthorized_Delete", "vISAUTHORIZED_DELETE", 0, "boolean", 4, 0);
   this.setVCMap("AV16IsAuthorized_UAAssociateRoles", "vISAUTHORIZED_UAASSOCIATEROLES", 0, "boolean", 4, 0);
   this.setVCMap("AV95IsAuthorized_AsociarCorredor", "vISAUTHORIZED_ASOCIARCORREDOR", 0, "boolean", 4, 0);
   this.setVCMap("AV40ManageFiltersExecutionStep", "vMANAGEFILTERSEXECUTIONSTEP", 0, "int", 1, 0);
   this.setVCMap("AV28DynamicFiltersEnabled2", "vDYNAMICFILTERSENABLED2", 0, "boolean", 4, 0);
   this.setVCMap("AV32DynamicFiltersEnabled3", "vDYNAMICFILTERSENABLED3", 0, "boolean", 4, 0);
   this.setVCMap("AV70ColumnsSelector", "vCOLUMNSSELECTOR", 0, "WWPBaseObjects\WWPColumnsSelector", 0, 0);
   this.setVCMap("AV51TFSecUserName", "vTFSECUSERNAME", 0, "svchar", 100, 0);
   this.setVCMap("AV52TFSecUserName_Sel", "vTFSECUSERNAME_SEL", 0, "svchar", 100, 0);
   this.setVCMap("AV84TFSecUserDescripcion", "vTFSECUSERDESCRIPCION", 0, "svchar", 100, 0);
   this.setVCMap("AV85TFSecUserDescripcion_Sel", "vTFSECUSERDESCRIPCION_SEL", 0, "svchar", 100, 0);
   this.setVCMap("AV99TFSecUserCargaPolizas_Sel", "vTFSECUSERCARGAPOLIZAS_SEL", 0, "int", 1, 0);
   this.setVCMap("AV101TFSecUserMail", "vTFSECUSERMAIL", 0, "svchar", 100, 0);
   this.setVCMap("AV102TFSecUserMail_Sel", "vTFSECUSERMAIL_SEL", 0, "svchar", 100, 0);
   this.setVCMap("AV103TFSecUserKey", "vTFSECUSERKEY", 0, "svchar", 400, 0);
   this.setVCMap("AV104TFSecUserKey_Sel", "vTFSECUSERKEY_SEL", 0, "svchar", 400, 0);
   this.setVCMap("AV105TFSecUserToken", "vTFSECUSERTOKEN", 0, "svchar", 400, 0);
   this.setVCMap("AV106TFSecUserToken_Sel", "vTFSECUSERTOKEN_SEL", 0, "svchar", 400, 0);
   this.setVCMap("AV107TFSecUserTokenFecha", "vTFSECUSERTOKENFECHA", 0, "dtime", 10, 12);
   this.setVCMap("AV108TFSecUserTokenFecha_To", "vTFSECUSERTOKENFECHA_TO", 0, "dtime", 10, 12);
   this.setVCMap("AV142Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV23OrderedBy", "vORDEREDBY", 0, "int", 4, 0);
   this.setVCMap("AV24OrderedDsc", "vORDEREDDSC", 0, "boolean", 4, 0);
   this.setVCMap("AV20GridState", "vGRIDSTATE", 0, "WWPBaseObjects\WWPGridState", 0, 0);
   this.setVCMap("AV37DynamicFiltersIgnoreFirst", "vDYNAMICFILTERSIGNOREFIRST", 0, "boolean", 4, 0);
   this.setVCMap("AV36DynamicFiltersRemoving", "vDYNAMICFILTERSREMOVING", 0, "boolean", 4, 0);
   this.setVCMap("AV17IsAuthorized_Update", "vISAUTHORIZED_UPDATE", 0, "boolean", 4, 0);
   this.setVCMap("AV18IsAuthorized_Delete", "vISAUTHORIZED_DELETE", 0, "boolean", 4, 0);
   this.setVCMap("AV16IsAuthorized_UAAssociateRoles", "vISAUTHORIZED_UAASSOCIATEROLES", 0, "boolean", 4, 0);
   this.setVCMap("AV95IsAuthorized_AsociarCorredor", "vISAUTHORIZED_ASOCIARCORREDOR", 0, "boolean", 4, 0);
   GridContainer.addRefreshingVar(this.GXValidFnc[39]);
   GridContainer.addRefreshingVar(this.GXValidFnc[47]);
   GridContainer.addRefreshingVar(this.GXValidFnc[50]);
   GridContainer.addRefreshingVar(this.GXValidFnc[53]);
   GridContainer.addRefreshingVar(this.GXValidFnc[66]);
   GridContainer.addRefreshingVar(this.GXValidFnc[74]);
   GridContainer.addRefreshingVar(this.GXValidFnc[77]);
   GridContainer.addRefreshingVar(this.GXValidFnc[80]);
   GridContainer.addRefreshingVar(this.GXValidFnc[93]);
   GridContainer.addRefreshingVar(this.GXValidFnc[101]);
   GridContainer.addRefreshingVar(this.GXValidFnc[104]);
   GridContainer.addRefreshingVar(this.GXValidFnc[107]);
   GridContainer.addRefreshingVar({rfrVar:"AV40ManageFiltersExecutionStep"});
   GridContainer.addRefreshingVar({rfrVar:"AV28DynamicFiltersEnabled2"});
   GridContainer.addRefreshingVar({rfrVar:"AV32DynamicFiltersEnabled3"});
   GridContainer.addRefreshingVar({rfrVar:"AV70ColumnsSelector"});
   GridContainer.addRefreshingVar({rfrVar:"AV51TFSecUserName"});
   GridContainer.addRefreshingVar({rfrVar:"AV52TFSecUserName_Sel"});
   GridContainer.addRefreshingVar({rfrVar:"AV84TFSecUserDescripcion"});
   GridContainer.addRefreshingVar({rfrVar:"AV85TFSecUserDescripcion_Sel"});
   GridContainer.addRefreshingVar({rfrVar:"AV99TFSecUserCargaPolizas_Sel"});
   GridContainer.addRefreshingVar({rfrVar:"AV101TFSecUserMail"});
   GridContainer.addRefreshingVar({rfrVar:"AV102TFSecUserMail_Sel"});
   GridContainer.addRefreshingVar({rfrVar:"AV103TFSecUserKey"});
   GridContainer.addRefreshingVar({rfrVar:"AV104TFSecUserKey_Sel"});
   GridContainer.addRefreshingVar({rfrVar:"AV105TFSecUserToken"});
   GridContainer.addRefreshingVar({rfrVar:"AV106TFSecUserToken_Sel"});
   GridContainer.addRefreshingVar({rfrVar:"AV107TFSecUserTokenFecha"});
   GridContainer.addRefreshingVar({rfrVar:"AV108TFSecUserTokenFecha_To"});
   GridContainer.addRefreshingVar({rfrVar:"AV142Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"AV23OrderedBy"});
   GridContainer.addRefreshingVar({rfrVar:"AV24OrderedDsc"});
   GridContainer.addRefreshingVar({rfrVar:"AV20GridState"});
   GridContainer.addRefreshingVar({rfrVar:"AV37DynamicFiltersIgnoreFirst"});
   GridContainer.addRefreshingVar({rfrVar:"AV36DynamicFiltersRemoving"});
   GridContainer.addRefreshingVar({rfrVar:"AV15UAAssociateRoles", rfrProp:"Title", gxAttId:"Uaassociateroles"});
   GridContainer.addRefreshingVar({rfrVar:"AV17IsAuthorized_Update"});
   GridContainer.addRefreshingVar({rfrVar:"AV18IsAuthorized_Delete"});
   GridContainer.addRefreshingVar({rfrVar:"AV16IsAuthorized_UAAssociateRoles"});
   GridContainer.addRefreshingVar({rfrVar:"AV95IsAuthorized_AsociarCorredor"});
   GridContainer.addRefreshingParm(this.GXValidFnc[39]);
   GridContainer.addRefreshingParm(this.GXValidFnc[47]);
   GridContainer.addRefreshingParm(this.GXValidFnc[50]);
   GridContainer.addRefreshingParm(this.GXValidFnc[53]);
   GridContainer.addRefreshingParm(this.GXValidFnc[66]);
   GridContainer.addRefreshingParm(this.GXValidFnc[74]);
   GridContainer.addRefreshingParm(this.GXValidFnc[77]);
   GridContainer.addRefreshingParm(this.GXValidFnc[80]);
   GridContainer.addRefreshingParm(this.GXValidFnc[93]);
   GridContainer.addRefreshingParm(this.GXValidFnc[101]);
   GridContainer.addRefreshingParm(this.GXValidFnc[104]);
   GridContainer.addRefreshingParm(this.GXValidFnc[107]);
   GridContainer.addRefreshingParm({rfrVar:"AV40ManageFiltersExecutionStep"});
   GridContainer.addRefreshingParm({rfrVar:"AV28DynamicFiltersEnabled2"});
   GridContainer.addRefreshingParm({rfrVar:"AV32DynamicFiltersEnabled3"});
   GridContainer.addRefreshingParm({rfrVar:"AV70ColumnsSelector"});
   GridContainer.addRefreshingParm({rfrVar:"AV51TFSecUserName"});
   GridContainer.addRefreshingParm({rfrVar:"AV52TFSecUserName_Sel"});
   GridContainer.addRefreshingParm({rfrVar:"AV84TFSecUserDescripcion"});
   GridContainer.addRefreshingParm({rfrVar:"AV85TFSecUserDescripcion_Sel"});
   GridContainer.addRefreshingParm({rfrVar:"AV99TFSecUserCargaPolizas_Sel"});
   GridContainer.addRefreshingParm({rfrVar:"AV101TFSecUserMail"});
   GridContainer.addRefreshingParm({rfrVar:"AV102TFSecUserMail_Sel"});
   GridContainer.addRefreshingParm({rfrVar:"AV103TFSecUserKey"});
   GridContainer.addRefreshingParm({rfrVar:"AV104TFSecUserKey_Sel"});
   GridContainer.addRefreshingParm({rfrVar:"AV105TFSecUserToken"});
   GridContainer.addRefreshingParm({rfrVar:"AV106TFSecUserToken_Sel"});
   GridContainer.addRefreshingParm({rfrVar:"AV107TFSecUserTokenFecha"});
   GridContainer.addRefreshingParm({rfrVar:"AV108TFSecUserTokenFecha_To"});
   GridContainer.addRefreshingParm({rfrVar:"AV142Pgmname"});
   GridContainer.addRefreshingParm({rfrVar:"AV23OrderedBy"});
   GridContainer.addRefreshingParm({rfrVar:"AV24OrderedDsc"});
   GridContainer.addRefreshingParm({rfrVar:"AV20GridState"});
   GridContainer.addRefreshingParm({rfrVar:"AV37DynamicFiltersIgnoreFirst"});
   GridContainer.addRefreshingParm({rfrVar:"AV36DynamicFiltersRemoving"});
   GridContainer.addRefreshingParm({rfrVar:"AV15UAAssociateRoles", rfrProp:"Title", gxAttId:"Uaassociateroles"});
   GridContainer.addRefreshingParm({rfrVar:"AV17IsAuthorized_Update"});
   GridContainer.addRefreshingParm({rfrVar:"AV18IsAuthorized_Delete"});
   GridContainer.addRefreshingParm({rfrVar:"AV16IsAuthorized_UAAssociateRoles"});
   GridContainer.addRefreshingParm({rfrVar:"AV95IsAuthorized_AsociarCorredor"});
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(wwpbaseobjects.secuserww);});
