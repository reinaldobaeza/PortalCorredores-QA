/*!   GeneXus C# 16_0_10-142546 on 4/19/2021 23:59:55.8
*/
gx.evt.autoSkip = false;
gx.define('wwpbaseobjects.secrolesecfunctionalityrolewc', true, function (CmpContext) {
   this.ServerClass =  "wwpbaseobjects.secrolesecfunctionalityrolewc" ;
   this.PackageName =  "GeneXus.Programs" ;
   this.setObjectType("web");
   this.setCmpContext(CmpContext);
   this.ReadonlyForm = true;
   this.anyGridBaseTable = true;
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.autoRefresh = true;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
      this.AV60ManageFiltersExecutionStep=gx.fn.getIntegerValue("vMANAGEFILTERSEXECUTIONSTEP",'.') ;
      this.AV26DynamicFiltersEnabled2=gx.fn.getControlValue("vDYNAMICFILTERSENABLED2") ;
      this.AV31DynamicFiltersEnabled3=gx.fn.getControlValue("vDYNAMICFILTERSENABLED3") ;
      this.AV76Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV20OrderedBy=gx.fn.getIntegerValue("vORDEREDBY",'.') ;
      this.AV21OrderedDsc=gx.fn.getControlValue("vORDEREDDSC") ;
      this.AV44TFSecFunctionalityKey=gx.fn.getControlValue("vTFSECFUNCTIONALITYKEY") ;
      this.AV45TFSecFunctionalityKey_Sel=gx.fn.getControlValue("vTFSECFUNCTIONALITYKEY_SEL") ;
      this.AV68TFSecFunctionalityType_Sels=gx.fn.getControlValue("vTFSECFUNCTIONALITYTYPE_SELS") ;
      this.AV55TFSecParentFunctionalityDescription=gx.fn.getControlValue("vTFSECPARENTFUNCTIONALITYDESCRIPTION") ;
      this.AV56TFSecParentFunctionalityDescription_Sel=gx.fn.getControlValue("vTFSECPARENTFUNCTIONALITYDESCRIPTION_SEL") ;
      this.AV8SecRoleId=gx.fn.getIntegerValue("vSECROLEID",'.') ;
      this.AV17GridState=gx.fn.getControlValue("vGRIDSTATE") ;
      this.AV37DynamicFiltersIgnoreFirst=gx.fn.getControlValue("vDYNAMICFILTERSIGNOREFIRST") ;
      this.AV36DynamicFiltersRemoving=gx.fn.getControlValue("vDYNAMICFILTERSREMOVING") ;
      this.AV73IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY") ;
      this.AV41IsAuthorized_Update=gx.fn.getControlValue("vISAUTHORIZED_UPDATE") ;
      this.AV40IsAuthorized_Delete=gx.fn.getControlValue("vISAUTHORIZED_DELETE") ;
      this.AV16IsAuthorized_SecFunctionalityDescription=gx.fn.getControlValue("vISAUTHORIZED_SECFUNCTIONALITYDESCRIPTION") ;
      this.AV42IsAuthorized_SecParentFunctionalityDescription=gx.fn.getControlValue("vISAUTHORIZED_SECPARENTFUNCTIONALITYDESCRIPTION") ;
      this.AV67TFSecFunctionalityType_SelsJson=gx.fn.getControlValue("vTFSECFUNCTIONALITYTYPE_SELSJSON") ;
      this.AV8SecRoleId=gx.fn.getIntegerValue("vSECROLEID",'.') ;
      this.AV60ManageFiltersExecutionStep=gx.fn.getIntegerValue("vMANAGEFILTERSEXECUTIONSTEP",'.') ;
      this.AV26DynamicFiltersEnabled2=gx.fn.getControlValue("vDYNAMICFILTERSENABLED2") ;
      this.AV31DynamicFiltersEnabled3=gx.fn.getControlValue("vDYNAMICFILTERSENABLED3") ;
      this.AV76Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV20OrderedBy=gx.fn.getIntegerValue("vORDEREDBY",'.') ;
      this.AV21OrderedDsc=gx.fn.getControlValue("vORDEREDDSC") ;
      this.AV44TFSecFunctionalityKey=gx.fn.getControlValue("vTFSECFUNCTIONALITYKEY") ;
      this.AV45TFSecFunctionalityKey_Sel=gx.fn.getControlValue("vTFSECFUNCTIONALITYKEY_SEL") ;
      this.AV68TFSecFunctionalityType_Sels=gx.fn.getControlValue("vTFSECFUNCTIONALITYTYPE_SELS") ;
      this.AV55TFSecParentFunctionalityDescription=gx.fn.getControlValue("vTFSECPARENTFUNCTIONALITYDESCRIPTION") ;
      this.AV56TFSecParentFunctionalityDescription_Sel=gx.fn.getControlValue("vTFSECPARENTFUNCTIONALITYDESCRIPTION_SEL") ;
      this.AV17GridState=gx.fn.getControlValue("vGRIDSTATE") ;
      this.AV37DynamicFiltersIgnoreFirst=gx.fn.getControlValue("vDYNAMICFILTERSIGNOREFIRST") ;
      this.AV36DynamicFiltersRemoving=gx.fn.getControlValue("vDYNAMICFILTERSREMOVING") ;
      this.AV73IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY") ;
      this.AV41IsAuthorized_Update=gx.fn.getControlValue("vISAUTHORIZED_UPDATE") ;
      this.AV40IsAuthorized_Delete=gx.fn.getControlValue("vISAUTHORIZED_DELETE") ;
      this.AV16IsAuthorized_SecFunctionalityDescription=gx.fn.getControlValue("vISAUTHORIZED_SECFUNCTIONALITYDESCRIPTION") ;
      this.AV42IsAuthorized_SecParentFunctionalityDescription=gx.fn.getControlValue("vISAUTHORIZED_SECPARENTFUNCTIONALITYDESCRIPTION") ;
   };
   this.Validv_Secfunctionalitytype=function()
   {
      return this.validCliEvt("Validv_Secfunctionalitytype", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("vSECFUNCTIONALITYTYPE");
         this.AnyError  = 0;
         if ( ! ( ( this.AV14SecFunctionalityType == 1 ) || ( this.AV14SecFunctionalityType == 2 ) || ( this.AV14SecFunctionalityType == 3 ) || ( this.AV14SecFunctionalityType == 4 ) || ( this.AV14SecFunctionalityType == 5 ) || ((0==this.AV14SecFunctionalityType)) ) )
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
      var currentRow = gx.fn.currentGridRowImpl(113);
      return this.validCliEvt("Valid_Secfunctionalityid", 113, function () {
      try {
         if(  gx.fn.currentGridRowImpl(113) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SECFUNCTIONALITYID", gx.fn.currentGridRowImpl(113));
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
   this.s122_client=function()
   {
      gx.fn.setCtrlProperty("vSECFUNCTIONALITYDESCRIPTION1","Visible", false );
      gx.fn.setCtrlProperty("vSECFUNCTIONALITYKEY1","Visible", false );
      gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR1","Visible", false );
      if ( this.AV22DynamicFiltersSelector1 == "SECFUNCTIONALITYDESCRIPTION" )
      {
         gx.fn.setCtrlProperty("vSECFUNCTIONALITYDESCRIPTION1","Visible", true );
         gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR1","Visible", true );
      }
      else if ( this.AV22DynamicFiltersSelector1 == "SECFUNCTIONALITYKEY" )
      {
         gx.fn.setCtrlProperty("vSECFUNCTIONALITYKEY1","Visible", true );
         gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR1","Visible", true );
      }
   };
   this.s132_client=function()
   {
      gx.fn.setCtrlProperty("vSECFUNCTIONALITYDESCRIPTION2","Visible", false );
      gx.fn.setCtrlProperty("vSECFUNCTIONALITYKEY2","Visible", false );
      gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR2","Visible", false );
      if ( this.AV27DynamicFiltersSelector2 == "SECFUNCTIONALITYDESCRIPTION" )
      {
         gx.fn.setCtrlProperty("vSECFUNCTIONALITYDESCRIPTION2","Visible", true );
         gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR2","Visible", true );
      }
      else if ( this.AV27DynamicFiltersSelector2 == "SECFUNCTIONALITYKEY" )
      {
         gx.fn.setCtrlProperty("vSECFUNCTIONALITYKEY2","Visible", true );
         gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR2","Visible", true );
      }
   };
   this.s142_client=function()
   {
      gx.fn.setCtrlProperty("vSECFUNCTIONALITYDESCRIPTION3","Visible", false );
      gx.fn.setCtrlProperty("vSECFUNCTIONALITYKEY3","Visible", false );
      gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR3","Visible", false );
      if ( this.AV32DynamicFiltersSelector3 == "SECFUNCTIONALITYDESCRIPTION" )
      {
         gx.fn.setCtrlProperty("vSECFUNCTIONALITYDESCRIPTION3","Visible", true );
         gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR3","Visible", true );
      }
      else if ( this.AV32DynamicFiltersSelector3 == "SECFUNCTIONALITYKEY" )
      {
         gx.fn.setCtrlProperty("vSECFUNCTIONALITYKEY3","Visible", true );
         gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR3","Visible", true );
      }
   };
   this.s172_client=function()
   {
      this.DDO_GRIDContainer.SortedStatus =  gx.text.trim( gx.num.str( this.AV20OrderedBy, 4, 0))+":"+(this.AV21OrderedDsc ? "DSC" : "ASC")  ;
   };
   this.s202_client=function()
   {
      if ( ! this.AV37DynamicFiltersIgnoreFirst )
      {
         this.AV19GridStateDynamicFilter =  {Selected:"",Value:"",Operator:0,ValueTo:""}  ;
         this.AV19GridStateDynamicFilter.Selected =  this.AV22DynamicFiltersSelector1  ;
         if ( ( this.AV22DynamicFiltersSelector1 == "SECFUNCTIONALITYDESCRIPTION" ) && ! ((''==this.AV24SecFunctionalityDescription1)) )
         {
            this.AV19GridStateDynamicFilter.Value =  this.AV24SecFunctionalityDescription1  ;
            this.AV19GridStateDynamicFilter.Operator = gx.num.trunc( this.AV23DynamicFiltersOperator1 ,0) ;
         }
         else if ( ( this.AV22DynamicFiltersSelector1 == "SECFUNCTIONALITYKEY" ) && ! ((''==this.AV25SecFunctionalityKey1)) )
         {
            this.AV19GridStateDynamicFilter.Value =  this.AV25SecFunctionalityKey1  ;
            this.AV19GridStateDynamicFilter.Operator = gx.num.trunc( this.AV23DynamicFiltersOperator1 ,0) ;
         }
         if ( this.AV36DynamicFiltersRemoving || ! ((''==this.AV19GridStateDynamicFilter.Value)) )
         {
            this.AV17GridState.DynamicFilters.push(this.AV19GridStateDynamicFilter) ;
         }
      }
      if ( this.AV26DynamicFiltersEnabled2 )
      {
         this.AV19GridStateDynamicFilter =  {Selected:"",Value:"",Operator:0,ValueTo:""}  ;
         this.AV19GridStateDynamicFilter.Selected =  this.AV27DynamicFiltersSelector2  ;
         if ( ( this.AV27DynamicFiltersSelector2 == "SECFUNCTIONALITYDESCRIPTION" ) && ! ((''==this.AV29SecFunctionalityDescription2)) )
         {
            this.AV19GridStateDynamicFilter.Value =  this.AV29SecFunctionalityDescription2  ;
            this.AV19GridStateDynamicFilter.Operator = gx.num.trunc( this.AV28DynamicFiltersOperator2 ,0) ;
         }
         else if ( ( this.AV27DynamicFiltersSelector2 == "SECFUNCTIONALITYKEY" ) && ! ((''==this.AV30SecFunctionalityKey2)) )
         {
            this.AV19GridStateDynamicFilter.Value =  this.AV30SecFunctionalityKey2  ;
            this.AV19GridStateDynamicFilter.Operator = gx.num.trunc( this.AV28DynamicFiltersOperator2 ,0) ;
         }
         if ( this.AV36DynamicFiltersRemoving || ! ((''==this.AV19GridStateDynamicFilter.Value)) )
         {
            this.AV17GridState.DynamicFilters.push(this.AV19GridStateDynamicFilter) ;
         }
      }
      if ( this.AV31DynamicFiltersEnabled3 )
      {
         this.AV19GridStateDynamicFilter =  {Selected:"",Value:"",Operator:0,ValueTo:""}  ;
         this.AV19GridStateDynamicFilter.Selected =  this.AV32DynamicFiltersSelector3  ;
         if ( ( this.AV32DynamicFiltersSelector3 == "SECFUNCTIONALITYDESCRIPTION" ) && ! ((''==this.AV34SecFunctionalityDescription3)) )
         {
            this.AV19GridStateDynamicFilter.Value =  this.AV34SecFunctionalityDescription3  ;
            this.AV19GridStateDynamicFilter.Operator = gx.num.trunc( this.AV33DynamicFiltersOperator3 ,0) ;
         }
         else if ( ( this.AV32DynamicFiltersSelector3 == "SECFUNCTIONALITYKEY" ) && ! ((''==this.AV35SecFunctionalityKey3)) )
         {
            this.AV19GridStateDynamicFilter.Value =  this.AV35SecFunctionalityKey3  ;
            this.AV19GridStateDynamicFilter.Operator = gx.num.trunc( this.AV33DynamicFiltersOperator3 ,0) ;
         }
         if ( this.AV36DynamicFiltersRemoving || ! ((''==this.AV19GridStateDynamicFilter.Value)) )
         {
            this.AV17GridState.DynamicFilters.push(this.AV19GridStateDynamicFilter) ;
         }
      }
   };
   this.s212_client=function()
   {
      this.AV26DynamicFiltersEnabled2 =  false  ;
      this.AV27DynamicFiltersSelector2 =  "SECFUNCTIONALITYDESCRIPTION"  ;
      this.AV28DynamicFiltersOperator2 = gx.num.trunc( 0 ,0) ;
      this.AV29SecFunctionalityDescription2 =  ''  ;
      this.s132_client();
      this.AV31DynamicFiltersEnabled3 =  false  ;
      this.AV32DynamicFiltersSelector3 =  "SECFUNCTIONALITYDESCRIPTION"  ;
      this.AV33DynamicFiltersOperator3 = gx.num.trunc( 0 ,0) ;
      this.AV34SecFunctionalityDescription3 =  ''  ;
      this.s142_client();
   };
   this.e12352_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE", false, null, true, true);
   };
   this.e13352_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", false, null, true, true);
   };
   this.e14352_client=function()
   {
      return this.executeServerEvent("DDO_GRID.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e15352_client=function()
   {
      return this.executeServerEvent("'REMOVEDYNAMICFILTERS1'", true, null, false, false);
   };
   this.e16352_client=function()
   {
      return this.executeServerEvent("'REMOVEDYNAMICFILTERS2'", true, null, false, false);
   };
   this.e17352_client=function()
   {
      return this.executeServerEvent("'REMOVEDYNAMICFILTERS3'", true, null, false, false);
   };
   this.e11352_client=function()
   {
      return this.executeServerEvent("DDO_MANAGEFILTERS.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e18352_client=function()
   {
      return this.executeServerEvent("'ADDDYNAMICFILTERS1'", true, null, false, false);
   };
   this.e19352_client=function()
   {
      return this.executeServerEvent("VDYNAMICFILTERSSELECTOR1.CLICK", true, null, false, true);
   };
   this.e20352_client=function()
   {
      return this.executeServerEvent("'ADDDYNAMICFILTERS2'", true, null, false, false);
   };
   this.e21352_client=function()
   {
      return this.executeServerEvent("VDYNAMICFILTERSSELECTOR2.CLICK", true, null, false, true);
   };
   this.e22352_client=function()
   {
      return this.executeServerEvent("VDYNAMICFILTERSSELECTOR3.CLICK", true, null, false, true);
   };
   this.e26352_client=function()
   {
      return this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e27352_client=function()
   {
      return this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,15,20,23,24,25,28,31,33,34,36,38,41,42,44,45,47,48,50,53,55,58,60,61,63,65,68,69,71,72,74,75,77,80,82,85,87,88,90,92,95,96,98,99,101,102,104,107,108,109,110,111,112,114,115,116,117,118,119,120,121,122,123,125,126,127,128,130];
   this.GXLastCtrlId =130;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",113,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"wwpbaseobjects.secrolesecfunctionalityrolewc",[],false,1,false,true,0,false,false,false,"",0,"px",0,"px","Nueva fila",true,false,false,null,null,false,"",false,[1,1,1,1],false,0,true,false);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Display",114,"vDISPLAY","","Visualizar","Display","char",0,"px",20,20,"left",null,[],"Display","Display",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit("Update",115,"vUPDATE","","Modificar","Update","char",0,"px",20,20,"left",null,[],"Update","Update",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit("Delete",116,"vDELETE","","Eliminar","Delete","char",0,"px",20,20,"left",null,[],"Delete","Delete",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit(136,117,"SECFUNCTIONALITYID","Functionality Id","","SecFunctionalityId","int",0,"px",10,10,"right",null,[],136,"SecFunctionalityId",false,0,false,false,"Attribute",1,"WWColumn");
   GridContainer.addSingleLineEdit(138,118,"SECFUNCTIONALITYKEY","Functionality Key","","SecFunctionalityKey","svchar",0,"px",100,80,"left",null,[],138,"SecFunctionalityKey",true,0,false,false,"Attribute",1,"WWColumn");
   GridContainer.addComboBox(144,119,"SECFUNCTIONALITYTYPE","Functionality Type","SecFunctionalityType","int",null,0,true,false,0,"px","WWColumn");
   GridContainer.addSingleLineEdit(143,120,"SECFUNCTIONALITYDESCRIPTION","Functionality Description","","SecFunctionalityDescription","svchar",0,"px",100,80,"left",null,[],143,"SecFunctionalityDescription",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(146,121,"SECPARENTFUNCTIONALITYDESCRIPTION","Parent Functionality","","SecParentFunctionalityDescription","svchar",0,"px",100,80,"left",null,[],146,"SecParentFunctionalityDescription",true,0,false,false,"Attribute",1,"WWColumn");
   this.GridContainer.emptyText = "";
   this.setGrid(GridContainer);
   this.GRIDPAGINATIONBARContainer = gx.uc.getNew(this, 124, 25, "DVelop_DVPaginationBar", this.CmpContext + "GRIDPAGINATIONBARContainer", "Gridpaginationbar", "GRIDPAGINATIONBAR");
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
   GRIDPAGINATIONBARContainer.addV2CFunction('AV70GridCurrentPage', "vGRIDCURRENTPAGE", 'SetCurrentPage');
   GRIDPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV70GridCurrentPage=UC.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",UC.ParentObject.AV70GridCurrentPage); });
   GRIDPAGINATIONBARContainer.addV2CFunction('AV71GridPageCount', "vGRIDPAGECOUNT", 'SetPageCount');
   GRIDPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV71GridPageCount=UC.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",UC.ParentObject.AV71GridPageCount); });
   GRIDPAGINATIONBARContainer.setProp("RecordCount", "Recordcount", '', "str");
   GRIDPAGINATIONBARContainer.setProp("Page", "Page", '', "str");
   GRIDPAGINATIONBARContainer.setProp("Visible", "Visible", true, "bool");
   GRIDPAGINATIONBARContainer.setProp("Gx Control Type", "Gxcontroltype", '', "int");
   GRIDPAGINATIONBARContainer.setC2ShowFunction(function(UC) { UC.show(); });
   GRIDPAGINATIONBARContainer.addEventHandler("ChangePage", this.e12352_client);
   GRIDPAGINATIONBARContainer.addEventHandler("ChangeRowsPerPage", this.e13352_client);
   this.setUserControl(GRIDPAGINATIONBARContainer);
   this.DDO_GRIDContainer = gx.uc.getNew(this, 129, 25, "DDOGridTitleSettingsM", this.CmpContext + "DDO_GRIDContainer", "Ddo_grid", "DDO_GRID");
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
   DDO_GRIDContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
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
   DDO_GRIDContainer.setProp("ColumnIds", "Columnids", "4:SecFunctionalityKey|5:SecFunctionalityType|6:SecFunctionalityDescription|7:SecParentFunctionalityDescription", "str");
   DDO_GRIDContainer.setProp("ColumnsSortValues", "Columnssortvalues", "2|3|1|4", "str");
   DDO_GRIDContainer.setProp("IncludeSortASC", "Includesortasc", "T", "str");
   DDO_GRIDContainer.setProp("IncludeSortDSC", "Includesortdsc", "", "str");
   DDO_GRIDContainer.setProp("AllowGroup", "Allowgroup", "", "str");
   DDO_GRIDContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_GRIDContainer.setProp("IncludeFilter", "Includefilter", "T|||T", "str");
   DDO_GRIDContainer.setProp("FilterType", "Filtertype", "Character|||Character", "str");
   DDO_GRIDContainer.setProp("FilterIsRange", "Filterisrange", "", "str");
   DDO_GRIDContainer.setProp("IncludeDataList", "Includedatalist", "T|T||T", "str");
   DDO_GRIDContainer.setProp("DataListType", "Datalisttype", "Dynamic|FixedValues||Dynamic", "str");
   DDO_GRIDContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", "|T||", "str");
   DDO_GRIDContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "|1:Mode,2:Action,3:Tab,4:Object,5:Attribute||", "str");
   DDO_GRIDContainer.setProp("DataListProc", "Datalistproc", "WWPBaseObjects.SecRoleSecFunctionalityRoleWCGetFilterData", "str");
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
   DDO_GRIDContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_FilterSelected", "str");
   DDO_GRIDContainer.addV2CFunction('AV58DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_GRIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV58DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV58DDO_TitleSettingsIcons); });
   DDO_GRIDContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_GRIDContainer.addEventHandler("OnOptionClicked", this.e14352_client);
   this.setUserControl(DDO_GRIDContainer);
   this.DDO_MANAGEFILTERSContainer = gx.uc.getNew(this, 18, 0, "BootstrapDropDownOptions", this.CmpContext + "DDO_MANAGEFILTERSContainer", "Ddo_managefilters", "DDO_MANAGEFILTERS");
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
   DDO_MANAGEFILTERSContainer.addV2CFunction('AV64ManageFiltersData', "vMANAGEFILTERSDATA", 'SetDropDownOptionsData');
   DDO_MANAGEFILTERSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV64ManageFiltersData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vMANAGEFILTERSDATA",UC.ParentObject.AV64ManageFiltersData); });
   DDO_MANAGEFILTERSContainer.setProp("Gx Control Type", "Gxcontroltype", '', "int");
   DDO_MANAGEFILTERSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_MANAGEFILTERSContainer.addEventHandler("OnOptionClicked", this.e11352_client);
   this.setUserControl(DDO_MANAGEFILTERSContainer);
   GXValidFnc[2]={ id: 2, fld:"",grid:0};
   GXValidFnc[3]={ id: 3, fld:"LAYOUTMAINTABLE",grid:0};
   GXValidFnc[4]={ id: 4, fld:"",grid:0};
   GXValidFnc[5]={ id: 5, fld:"",grid:0};
   GXValidFnc[6]={ id: 6, fld:"TABLEGRIDHEADER",grid:0};
   GXValidFnc[7]={ id: 7, fld:"",grid:0};
   GXValidFnc[8]={ id: 8, fld:"",grid:0};
   GXValidFnc[10]={ id: 10, fld:"",grid:0};
   GXValidFnc[11]={ id: 11, fld:"",grid:0};
   GXValidFnc[12]={ id: 12, fld:"TABLEHEADER",grid:0};
   GXValidFnc[13]={ id: 13, fld:"",grid:0};
   GXValidFnc[14]={ id: 14, fld:"",grid:0};
   GXValidFnc[15]={ id: 15, fld:"TABLERIGHTHEADER",grid:0};
   GXValidFnc[20]={ id: 20, fld:"TABLEFILTERS",grid:0};
   GXValidFnc[23]={ id: 23, fld:"",grid:0};
   GXValidFnc[24]={ id: 24, fld:"",grid:0};
   GXValidFnc[25]={ id:25 ,lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Secfunctionalitytype,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vSECFUNCTIONALITYTYPE",gxz:"ZV14SecFunctionalityType",gxold:"OV14SecFunctionalityType",gxvar:"AV14SecFunctionalityType",ucs:[],op:[25],ip:[25],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV14SecFunctionalityType=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV14SecFunctionalityType=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vSECFUNCTIONALITYTYPE",gx.O.AV14SecFunctionalityType)},c2v:function(){if(this.val()!==undefined)gx.O.AV14SecFunctionalityType=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSECFUNCTIONALITYTYPE",'.')},nac:gx.falseFn};
   GXValidFnc[28]={ id: 28, fld:"TABLEDYNAMICFILTERS",grid:0};
   GXValidFnc[31]={ id: 31, fld:"DYNAMICFILTERSPREFIX1", format:0,grid:0};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id:34 ,lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vDYNAMICFILTERSSELECTOR1",gxz:"ZV22DynamicFiltersSelector1",gxold:"OV22DynamicFiltersSelector1",gxvar:"AV22DynamicFiltersSelector1",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV22DynamicFiltersSelector1=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV22DynamicFiltersSelector1=Value},v2c:function(){gx.fn.setComboBoxValue("vDYNAMICFILTERSSELECTOR1",gx.O.AV22DynamicFiltersSelector1)},c2v:function(){if(this.val()!==undefined)gx.O.AV22DynamicFiltersSelector1=this.val()},val:function(){return gx.fn.getControlValue("vDYNAMICFILTERSSELECTOR1")},nac:gx.falseFn,evt:"e19352_client"};
   GXValidFnc[36]={ id: 36, fld:"DYNAMICFILTERSMIDDLE1", format:0,grid:0};
   GXValidFnc[38]={ id: 38, fld:"TABLEMERGEDDYNAMICFILTERS1",grid:0};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id:42 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vDYNAMICFILTERSOPERATOR1",gxz:"ZV23DynamicFiltersOperator1",gxold:"OV23DynamicFiltersOperator1",gxvar:"AV23DynamicFiltersOperator1",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV23DynamicFiltersOperator1=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV23DynamicFiltersOperator1=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vDYNAMICFILTERSOPERATOR1",gx.O.AV23DynamicFiltersOperator1)},c2v:function(){if(this.val()!==undefined)gx.O.AV23DynamicFiltersOperator1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDYNAMICFILTERSOPERATOR1",'.')},nac:gx.falseFn};
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id:45 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vSECFUNCTIONALITYDESCRIPTION1",gxz:"ZV24SecFunctionalityDescription1",gxold:"OV24SecFunctionalityDescription1",gxvar:"AV24SecFunctionalityDescription1",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV24SecFunctionalityDescription1=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV24SecFunctionalityDescription1=Value},v2c:function(){gx.fn.setControlValue("vSECFUNCTIONALITYDESCRIPTION1",gx.O.AV24SecFunctionalityDescription1,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV24SecFunctionalityDescription1=this.val()},val:function(){return gx.fn.getControlValue("vSECFUNCTIONALITYDESCRIPTION1")},nac:gx.falseFn};
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   GXValidFnc[48]={ id:48 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vSECFUNCTIONALITYKEY1",gxz:"ZV25SecFunctionalityKey1",gxold:"OV25SecFunctionalityKey1",gxvar:"AV25SecFunctionalityKey1",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV25SecFunctionalityKey1=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV25SecFunctionalityKey1=Value},v2c:function(){gx.fn.setControlValue("vSECFUNCTIONALITYKEY1",gx.O.AV25SecFunctionalityKey1,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV25SecFunctionalityKey1=this.val()},val:function(){return gx.fn.getControlValue("vSECFUNCTIONALITYKEY1")},nac:gx.falseFn};
   GXValidFnc[50]={ id: 50, fld:"UNNAMEDTABLEDYNAMICFILTERS_1",grid:0};
   GXValidFnc[53]={ id: 53, fld:"ADDDYNAMICFILTERS1",grid:0,evt:"e18352_client"};
   GXValidFnc[55]={ id: 55, fld:"REMOVEDYNAMICFILTERS1",grid:0,evt:"e15352_client"};
   GXValidFnc[58]={ id: 58, fld:"DYNAMICFILTERSPREFIX2", format:0,grid:0};
   GXValidFnc[60]={ id: 60, fld:"",grid:0};
   GXValidFnc[61]={ id:61 ,lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vDYNAMICFILTERSSELECTOR2",gxz:"ZV27DynamicFiltersSelector2",gxold:"OV27DynamicFiltersSelector2",gxvar:"AV27DynamicFiltersSelector2",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV27DynamicFiltersSelector2=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV27DynamicFiltersSelector2=Value},v2c:function(){gx.fn.setComboBoxValue("vDYNAMICFILTERSSELECTOR2",gx.O.AV27DynamicFiltersSelector2)},c2v:function(){if(this.val()!==undefined)gx.O.AV27DynamicFiltersSelector2=this.val()},val:function(){return gx.fn.getControlValue("vDYNAMICFILTERSSELECTOR2")},nac:gx.falseFn,evt:"e21352_client"};
   GXValidFnc[63]={ id: 63, fld:"DYNAMICFILTERSMIDDLE2", format:0,grid:0};
   GXValidFnc[65]={ id: 65, fld:"TABLEMERGEDDYNAMICFILTERS2",grid:0};
   GXValidFnc[68]={ id: 68, fld:"",grid:0};
   GXValidFnc[69]={ id:69 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vDYNAMICFILTERSOPERATOR2",gxz:"ZV28DynamicFiltersOperator2",gxold:"OV28DynamicFiltersOperator2",gxvar:"AV28DynamicFiltersOperator2",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV28DynamicFiltersOperator2=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV28DynamicFiltersOperator2=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vDYNAMICFILTERSOPERATOR2",gx.O.AV28DynamicFiltersOperator2)},c2v:function(){if(this.val()!==undefined)gx.O.AV28DynamicFiltersOperator2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDYNAMICFILTERSOPERATOR2",'.')},nac:gx.falseFn};
   GXValidFnc[71]={ id: 71, fld:"",grid:0};
   GXValidFnc[72]={ id:72 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vSECFUNCTIONALITYDESCRIPTION2",gxz:"ZV29SecFunctionalityDescription2",gxold:"OV29SecFunctionalityDescription2",gxvar:"AV29SecFunctionalityDescription2",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV29SecFunctionalityDescription2=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV29SecFunctionalityDescription2=Value},v2c:function(){gx.fn.setControlValue("vSECFUNCTIONALITYDESCRIPTION2",gx.O.AV29SecFunctionalityDescription2,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV29SecFunctionalityDescription2=this.val()},val:function(){return gx.fn.getControlValue("vSECFUNCTIONALITYDESCRIPTION2")},nac:gx.falseFn};
   GXValidFnc[74]={ id: 74, fld:"",grid:0};
   GXValidFnc[75]={ id:75 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vSECFUNCTIONALITYKEY2",gxz:"ZV30SecFunctionalityKey2",gxold:"OV30SecFunctionalityKey2",gxvar:"AV30SecFunctionalityKey2",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV30SecFunctionalityKey2=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV30SecFunctionalityKey2=Value},v2c:function(){gx.fn.setControlValue("vSECFUNCTIONALITYKEY2",gx.O.AV30SecFunctionalityKey2,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV30SecFunctionalityKey2=this.val()},val:function(){return gx.fn.getControlValue("vSECFUNCTIONALITYKEY2")},nac:gx.falseFn};
   GXValidFnc[77]={ id: 77, fld:"UNNAMEDTABLEDYNAMICFILTERS_2",grid:0};
   GXValidFnc[80]={ id: 80, fld:"ADDDYNAMICFILTERS2",grid:0,evt:"e20352_client"};
   GXValidFnc[82]={ id: 82, fld:"REMOVEDYNAMICFILTERS2",grid:0,evt:"e16352_client"};
   GXValidFnc[85]={ id: 85, fld:"DYNAMICFILTERSPREFIX3", format:0,grid:0};
   GXValidFnc[87]={ id: 87, fld:"",grid:0};
   GXValidFnc[88]={ id:88 ,lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vDYNAMICFILTERSSELECTOR3",gxz:"ZV32DynamicFiltersSelector3",gxold:"OV32DynamicFiltersSelector3",gxvar:"AV32DynamicFiltersSelector3",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV32DynamicFiltersSelector3=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV32DynamicFiltersSelector3=Value},v2c:function(){gx.fn.setComboBoxValue("vDYNAMICFILTERSSELECTOR3",gx.O.AV32DynamicFiltersSelector3)},c2v:function(){if(this.val()!==undefined)gx.O.AV32DynamicFiltersSelector3=this.val()},val:function(){return gx.fn.getControlValue("vDYNAMICFILTERSSELECTOR3")},nac:gx.falseFn,evt:"e22352_client"};
   GXValidFnc[90]={ id: 90, fld:"DYNAMICFILTERSMIDDLE3", format:0,grid:0};
   GXValidFnc[92]={ id: 92, fld:"TABLEMERGEDDYNAMICFILTERS3",grid:0};
   GXValidFnc[95]={ id: 95, fld:"",grid:0};
   GXValidFnc[96]={ id:96 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vDYNAMICFILTERSOPERATOR3",gxz:"ZV33DynamicFiltersOperator3",gxold:"OV33DynamicFiltersOperator3",gxvar:"AV33DynamicFiltersOperator3",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV33DynamicFiltersOperator3=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV33DynamicFiltersOperator3=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vDYNAMICFILTERSOPERATOR3",gx.O.AV33DynamicFiltersOperator3)},c2v:function(){if(this.val()!==undefined)gx.O.AV33DynamicFiltersOperator3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDYNAMICFILTERSOPERATOR3",'.')},nac:gx.falseFn};
   GXValidFnc[98]={ id: 98, fld:"",grid:0};
   GXValidFnc[99]={ id:99 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vSECFUNCTIONALITYDESCRIPTION3",gxz:"ZV34SecFunctionalityDescription3",gxold:"OV34SecFunctionalityDescription3",gxvar:"AV34SecFunctionalityDescription3",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV34SecFunctionalityDescription3=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV34SecFunctionalityDescription3=Value},v2c:function(){gx.fn.setControlValue("vSECFUNCTIONALITYDESCRIPTION3",gx.O.AV34SecFunctionalityDescription3,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV34SecFunctionalityDescription3=this.val()},val:function(){return gx.fn.getControlValue("vSECFUNCTIONALITYDESCRIPTION3")},nac:gx.falseFn};
   GXValidFnc[101]={ id: 101, fld:"",grid:0};
   GXValidFnc[102]={ id:102 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vSECFUNCTIONALITYKEY3",gxz:"ZV35SecFunctionalityKey3",gxold:"OV35SecFunctionalityKey3",gxvar:"AV35SecFunctionalityKey3",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV35SecFunctionalityKey3=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV35SecFunctionalityKey3=Value},v2c:function(){gx.fn.setControlValue("vSECFUNCTIONALITYKEY3",gx.O.AV35SecFunctionalityKey3,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV35SecFunctionalityKey3=this.val()},val:function(){return gx.fn.getControlValue("vSECFUNCTIONALITYKEY3")},nac:gx.falseFn};
   GXValidFnc[104]={ id: 104, fld:"UNNAMEDTABLEDYNAMICFILTERS_3",grid:0};
   GXValidFnc[107]={ id: 107, fld:"REMOVEDYNAMICFILTERS3",grid:0,evt:"e17352_client"};
   GXValidFnc[108]={ id: 108, fld:"",grid:0};
   GXValidFnc[109]={ id: 109, fld:"",grid:0};
   GXValidFnc[110]={ id: 110, fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};
   GXValidFnc[111]={ id: 111, fld:"",grid:0};
   GXValidFnc[112]={ id: 112, fld:"",grid:0};
   GXValidFnc[114]={ id:114 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:113,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDISPLAY",gxz:"ZV72Display",gxold:"OV72Display",gxvar:"AV72Display",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV72Display=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV72Display=Value},v2c:function(row){gx.fn.setGridControlValue("vDISPLAY",row || gx.fn.currentGridRowImpl(113),gx.O.AV72Display,1)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV72Display=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vDISPLAY",row || gx.fn.currentGridRowImpl(113))},nac:gx.falseFn};
   GXValidFnc[115]={ id:115 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:113,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE",gxz:"ZV39Update",gxold:"OV39Update",gxvar:"AV39Update",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV39Update=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV39Update=Value},v2c:function(row){gx.fn.setGridControlValue("vUPDATE",row || gx.fn.currentGridRowImpl(113),gx.O.AV39Update,1)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV39Update=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vUPDATE",row || gx.fn.currentGridRowImpl(113))},nac:gx.falseFn};
   GXValidFnc[116]={ id:116 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:113,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE",gxz:"ZV38Delete",gxold:"OV38Delete",gxvar:"AV38Delete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV38Delete=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV38Delete=Value},v2c:function(row){gx.fn.setGridControlValue("vDELETE",row || gx.fn.currentGridRowImpl(113),gx.O.AV38Delete,1)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV38Delete=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vDELETE",row || gx.fn.currentGridRowImpl(113))},nac:gx.falseFn};
   GXValidFnc[117]={ id:117 ,lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:113,gxgrid:this.GridContainer,fnc:this.Valid_Secfunctionalityid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECFUNCTIONALITYID",gxz:"Z136SecFunctionalityId",gxold:"O136SecFunctionalityId",gxvar:"A136SecFunctionalityId",ucs:[],op:[25,121,118,119,120],ip:[121,118,119,120,25,117],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A136SecFunctionalityId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z136SecFunctionalityId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SECFUNCTIONALITYID",row || gx.fn.currentGridRowImpl(113),gx.O.A136SecFunctionalityId,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A136SecFunctionalityId=gx.num.intval(this.val(row))},val:function(row){return gx.fn.getGridIntegerValue("SECFUNCTIONALITYID",row || gx.fn.currentGridRowImpl(113),'.')},nac:gx.falseFn};
   GXValidFnc[118]={ id:118 ,lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:113,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECFUNCTIONALITYKEY",gxz:"Z138SecFunctionalityKey",gxold:"O138SecFunctionalityKey",gxvar:"A138SecFunctionalityKey",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A138SecFunctionalityKey=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z138SecFunctionalityKey=Value},v2c:function(row){gx.fn.setGridControlValue("SECFUNCTIONALITYKEY",row || gx.fn.currentGridRowImpl(113),gx.O.A138SecFunctionalityKey,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A138SecFunctionalityKey=this.val(row)},val:function(row){return gx.fn.getGridControlValue("SECFUNCTIONALITYKEY",row || gx.fn.currentGridRowImpl(113))},nac:gx.falseFn};
   GXValidFnc[119]={ id:119 ,lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:113,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECFUNCTIONALITYTYPE",gxz:"Z144SecFunctionalityType",gxold:"O144SecFunctionalityType",gxvar:"A144SecFunctionalityType",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A144SecFunctionalityType=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z144SecFunctionalityType=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridComboBoxValue("SECFUNCTIONALITYTYPE",row || gx.fn.currentGridRowImpl(113),gx.O.A144SecFunctionalityType);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.A144SecFunctionalityType=gx.num.intval(this.val(row))},val:function(row){return gx.fn.getGridIntegerValue("SECFUNCTIONALITYTYPE",row || gx.fn.currentGridRowImpl(113),'.')},nac:gx.falseFn};
   GXValidFnc[120]={ id:120 ,lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:113,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECFUNCTIONALITYDESCRIPTION",gxz:"Z143SecFunctionalityDescription",gxold:"O143SecFunctionalityDescription",gxvar:"A143SecFunctionalityDescription",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A143SecFunctionalityDescription=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z143SecFunctionalityDescription=Value},v2c:function(row){gx.fn.setGridControlValue("SECFUNCTIONALITYDESCRIPTION",row || gx.fn.currentGridRowImpl(113),gx.O.A143SecFunctionalityDescription,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A143SecFunctionalityDescription=this.val(row)},val:function(row){return gx.fn.getGridControlValue("SECFUNCTIONALITYDESCRIPTION",row || gx.fn.currentGridRowImpl(113))},nac:gx.falseFn};
   GXValidFnc[121]={ id:121 ,lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:113,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECPARENTFUNCTIONALITYDESCRIPTION",gxz:"Z146SecParentFunctionalityDescription",gxold:"O146SecParentFunctionalityDescription",gxvar:"A146SecParentFunctionalityDescription",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A146SecParentFunctionalityDescription=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z146SecParentFunctionalityDescription=Value},v2c:function(row){gx.fn.setGridControlValue("SECPARENTFUNCTIONALITYDESCRIPTION",row || gx.fn.currentGridRowImpl(113),gx.O.A146SecParentFunctionalityDescription,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A146SecParentFunctionalityDescription=this.val(row)},val:function(row){return gx.fn.getGridControlValue("SECPARENTFUNCTIONALITYDESCRIPTION",row || gx.fn.currentGridRowImpl(113))},nac:gx.falseFn};
   GXValidFnc[122]={ id: 122, fld:"",grid:0};
   GXValidFnc[123]={ id: 123, fld:"",grid:0};
   GXValidFnc[125]={ id: 125, fld:"",grid:0};
   GXValidFnc[126]={ id: 126, fld:"",grid:0};
   GXValidFnc[127]={ id: 127, fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};
   GXValidFnc[128]={ id: 128, fld:"JSDYNAMICFILTERS", format:1,grid:0};
   GXValidFnc[130]={ id:130 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECROLEID",gxz:"Z139SecRoleId",gxold:"O139SecRoleId",gxvar:"A139SecRoleId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A139SecRoleId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z139SecRoleId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SECROLEID",gx.O.A139SecRoleId,0)},c2v:function(){if(this.val()!==undefined)gx.O.A139SecRoleId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SECROLEID",'.')},nac:gx.falseFn};
   this.AV14SecFunctionalityType = 0 ;
   this.ZV14SecFunctionalityType = 0 ;
   this.OV14SecFunctionalityType = 0 ;
   this.AV22DynamicFiltersSelector1 = "" ;
   this.ZV22DynamicFiltersSelector1 = "" ;
   this.OV22DynamicFiltersSelector1 = "" ;
   this.AV23DynamicFiltersOperator1 = 0 ;
   this.ZV23DynamicFiltersOperator1 = 0 ;
   this.OV23DynamicFiltersOperator1 = 0 ;
   this.AV24SecFunctionalityDescription1 = "" ;
   this.ZV24SecFunctionalityDescription1 = "" ;
   this.OV24SecFunctionalityDescription1 = "" ;
   this.AV25SecFunctionalityKey1 = "" ;
   this.ZV25SecFunctionalityKey1 = "" ;
   this.OV25SecFunctionalityKey1 = "" ;
   this.AV27DynamicFiltersSelector2 = "" ;
   this.ZV27DynamicFiltersSelector2 = "" ;
   this.OV27DynamicFiltersSelector2 = "" ;
   this.AV28DynamicFiltersOperator2 = 0 ;
   this.ZV28DynamicFiltersOperator2 = 0 ;
   this.OV28DynamicFiltersOperator2 = 0 ;
   this.AV29SecFunctionalityDescription2 = "" ;
   this.ZV29SecFunctionalityDescription2 = "" ;
   this.OV29SecFunctionalityDescription2 = "" ;
   this.AV30SecFunctionalityKey2 = "" ;
   this.ZV30SecFunctionalityKey2 = "" ;
   this.OV30SecFunctionalityKey2 = "" ;
   this.AV32DynamicFiltersSelector3 = "" ;
   this.ZV32DynamicFiltersSelector3 = "" ;
   this.OV32DynamicFiltersSelector3 = "" ;
   this.AV33DynamicFiltersOperator3 = 0 ;
   this.ZV33DynamicFiltersOperator3 = 0 ;
   this.OV33DynamicFiltersOperator3 = 0 ;
   this.AV34SecFunctionalityDescription3 = "" ;
   this.ZV34SecFunctionalityDescription3 = "" ;
   this.OV34SecFunctionalityDescription3 = "" ;
   this.AV35SecFunctionalityKey3 = "" ;
   this.ZV35SecFunctionalityKey3 = "" ;
   this.OV35SecFunctionalityKey3 = "" ;
   this.ZV72Display = "" ;
   this.OV72Display = "" ;
   this.ZV39Update = "" ;
   this.OV39Update = "" ;
   this.ZV38Delete = "" ;
   this.OV38Delete = "" ;
   this.Z136SecFunctionalityId = 0 ;
   this.O136SecFunctionalityId = 0 ;
   this.Z138SecFunctionalityKey = "" ;
   this.O138SecFunctionalityKey = "" ;
   this.Z144SecFunctionalityType = 0 ;
   this.O144SecFunctionalityType = 0 ;
   this.Z143SecFunctionalityDescription = "" ;
   this.O143SecFunctionalityDescription = "" ;
   this.Z146SecParentFunctionalityDescription = "" ;
   this.O146SecParentFunctionalityDescription = "" ;
   this.A139SecRoleId = 0 ;
   this.Z139SecRoleId = 0 ;
   this.O139SecRoleId = 0 ;
   this.AV64ManageFiltersData = [ ] ;
   this.AV14SecFunctionalityType = 0 ;
   this.AV22DynamicFiltersSelector1 = "" ;
   this.AV23DynamicFiltersOperator1 = 0 ;
   this.AV24SecFunctionalityDescription1 = "" ;
   this.AV25SecFunctionalityKey1 = "" ;
   this.AV27DynamicFiltersSelector2 = "" ;
   this.AV28DynamicFiltersOperator2 = 0 ;
   this.AV29SecFunctionalityDescription2 = "" ;
   this.AV30SecFunctionalityKey2 = "" ;
   this.AV32DynamicFiltersSelector3 = "" ;
   this.AV33DynamicFiltersOperator3 = 0 ;
   this.AV34SecFunctionalityDescription3 = "" ;
   this.AV35SecFunctionalityKey3 = "" ;
   this.AV70GridCurrentPage = 0 ;
   this.AV58DDO_TitleSettingsIcons = {Default:"",Default_GXI:"",Filtered:"",Filtered_GXI:"",SortedASC:"",SortedASC_GXI:"",SortedDSC:"",SortedDSC_GXI:"",FilteredSortedASC:"",FilteredSortedASC_GXI:"",FilteredSortedDSC:"",FilteredSortedDSC_GXI:"",OptionSortASC:"",OptionSortASC_GXI:"",OptionSortDSC:"",OptionSortDSC_GXI:"",OptionApplyFilter:"",OptionApplyFilter_GXI:"",OptionFilteringData:"",OptionFilteringData_GXI:"",OptionCleanFilters:"",OptionCleanFilters_GXI:"",SelectedOption:"",SelectedOption_GXI:"",MultiselOption:"",MultiselOption_GXI:"",MultiselSelOption:"",MultiselSelOption_GXI:"",TreeviewCollapse:"",TreeviewCollapse_GXI:"",TreeviewExpand:"",TreeviewExpand_GXI:""} ;
   this.A139SecRoleId = 0 ;
   this.AV8SecRoleId = 0 ;
   this.A137SecParentFunctionalityId = 0 ;
   this.AV72Display = "" ;
   this.AV39Update = "" ;
   this.AV38Delete = "" ;
   this.A136SecFunctionalityId = 0 ;
   this.A138SecFunctionalityKey = "" ;
   this.A144SecFunctionalityType = 0 ;
   this.A143SecFunctionalityDescription = "" ;
   this.A146SecParentFunctionalityDescription = "" ;
   this.AV60ManageFiltersExecutionStep = 0 ;
   this.AV26DynamicFiltersEnabled2 = false ;
   this.AV31DynamicFiltersEnabled3 = false ;
   this.AV76Pgmname = "" ;
   this.AV20OrderedBy = 0 ;
   this.AV21OrderedDsc = false ;
   this.AV44TFSecFunctionalityKey = "" ;
   this.AV45TFSecFunctionalityKey_Sel = "" ;
   this.AV68TFSecFunctionalityType_Sels = [ ] ;
   this.AV55TFSecParentFunctionalityDescription = "" ;
   this.AV56TFSecParentFunctionalityDescription_Sel = "" ;
   this.AV17GridState = {CurrentPage:0,OrderedBy:0,OrderedDsc:false,HidingSearch:0,PageSize:"",CollapsedRecords:"",GroupBy:"",FilterValues:[],DynamicFilters:[]} ;
   this.AV37DynamicFiltersIgnoreFirst = false ;
   this.AV36DynamicFiltersRemoving = false ;
   this.AV73IsAuthorized_Display = false ;
   this.AV41IsAuthorized_Update = false ;
   this.AV40IsAuthorized_Delete = false ;
   this.AV16IsAuthorized_SecFunctionalityDescription = false ;
   this.AV42IsAuthorized_SecParentFunctionalityDescription = false ;
   this.AV67TFSecFunctionalityType_SelsJson = "" ;
   this.AV19GridStateDynamicFilter = {Selected:"",Value:"",Operator:0,ValueTo:""} ;
   this.Events = {"e12352_client": ["GRIDPAGINATIONBAR.CHANGEPAGE", true] ,"e13352_client": ["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", true] ,"e14352_client": ["DDO_GRID.ONOPTIONCLICKED", true] ,"e15352_client": ["'REMOVEDYNAMICFILTERS1'", true] ,"e16352_client": ["'REMOVEDYNAMICFILTERS2'", true] ,"e17352_client": ["'REMOVEDYNAMICFILTERS3'", true] ,"e11352_client": ["DDO_MANAGEFILTERS.ONOPTIONCLICKED", true] ,"e18352_client": ["'ADDDYNAMICFILTERS1'", true] ,"e19352_client": ["VDYNAMICFILTERSSELECTOR1.CLICK", true] ,"e20352_client": ["'ADDDYNAMICFILTERS2'", true] ,"e21352_client": ["VDYNAMICFILTERSSELECTOR2.CLICK", true] ,"e22352_client": ["VDYNAMICFILTERSSELECTOR3.CLICK", true] ,"e26352_client": ["ENTER", true] ,"e27352_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'sPrefix'},{av:'AV60ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV22DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{av:'AV26DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV27DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{av:'AV31DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV32DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'GRID',prop:'Rows'},{ctrl:'vSECFUNCTIONALITYTYPE'},{av:'AV14SecFunctionalityType',fld:'vSECFUNCTIONALITYTYPE',pic:'Z9'},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV23DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV24SecFunctionalityDescription1',fld:'vSECFUNCTIONALITYDESCRIPTION1',pic:''},{av:'AV25SecFunctionalityKey1',fld:'vSECFUNCTIONALITYKEY1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV28DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV29SecFunctionalityDescription2',fld:'vSECFUNCTIONALITYDESCRIPTION2',pic:''},{av:'AV30SecFunctionalityKey2',fld:'vSECFUNCTIONALITYKEY2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV33DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV34SecFunctionalityDescription3',fld:'vSECFUNCTIONALITYDESCRIPTION3',pic:''},{av:'AV35SecFunctionalityKey3',fld:'vSECFUNCTIONALITYKEY3',pic:''},{av:'AV8SecRoleId',fld:'vSECROLEID',pic:'ZZZ9'},{av:'AV76Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV20OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV21OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV44TFSecFunctionalityKey',fld:'vTFSECFUNCTIONALITYKEY',pic:''},{av:'AV45TFSecFunctionalityKey_Sel',fld:'vTFSECFUNCTIONALITYKEY_SEL',pic:''},{av:'AV68TFSecFunctionalityType_Sels',fld:'vTFSECFUNCTIONALITYTYPE_SELS',pic:''},{av:'AV55TFSecParentFunctionalityDescription',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV56TFSecParentFunctionalityDescription_Sel',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION_SEL',pic:''},{av:'AV17GridState',fld:'vGRIDSTATE',pic:''},{av:'AV37DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV36DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV73IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'AV41IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV40IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV16IsAuthorized_SecFunctionalityDescription',fld:'vISAUTHORIZED_SECFUNCTIONALITYDESCRIPTION',pic:'',hsh:true},{av:'AV42IsAuthorized_SecParentFunctionalityDescription',fld:'vISAUTHORIZED_SECPARENTFUNCTIONALITYDESCRIPTION',pic:'',hsh:true},{av:'A139SecRoleId',fld:'SECROLEID',pic:'ZZZ9'}],[{av:'AV60ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV23DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV28DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV33DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV70GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV71GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV73IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:'vDISPLAY',prop:'Visible'},{av:'AV41IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:'vUPDATE',prop:'Visible'},{av:'AV40IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:'vDELETE',prop:'Visible'},{av:'AV64ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV17GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["START"] = [[{ctrl:'vSECFUNCTIONALITYTYPE'},{av:'AV14SecFunctionalityType',fld:'vSECFUNCTIONALITYTYPE',pic:'Z9'},{av:'AV20OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV22DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV27DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV32DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{av:'AV76Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV8SecRoleId',fld:'vSECROLEID',pic:'ZZZ9'},{av:'AV21OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV17GridState',fld:'vGRIDSTATE',pic:''},{av:'AV68TFSecFunctionalityType_Sels',fld:'vTFSECFUNCTIONALITYTYPE_SELS',pic:''},{av:'AV45TFSecFunctionalityKey_Sel',fld:'vTFSECFUNCTIONALITYKEY_SEL',pic:''},{av:'AV67TFSecFunctionalityType_SelsJson',fld:'vTFSECFUNCTIONALITYTYPE_SELSJSON',pic:''},{av:'AV56TFSecParentFunctionalityDescription_Sel',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION_SEL',pic:''},{av:'AV44TFSecFunctionalityKey',fld:'vTFSECFUNCTIONALITYKEY',pic:''},{av:'AV55TFSecParentFunctionalityDescription',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV36DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''}],[{ctrl:'GRID',prop:'Rows'},{av:'gx.fn.getCtrlProperty("JSDYNAMICFILTERS","Caption")',ctrl:'JSDYNAMICFILTERS',prop:'Caption'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV22DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV27DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV32DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Jsonclick")',ctrl:'ADDDYNAMICFILTERS1',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Jsonclick")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Jsonclick")',ctrl:'ADDDYNAMICFILTERS2',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Jsonclick")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS3","Jsonclick")',ctrl:'REMOVEDYNAMICFILTERS3',prop:'Jsonclick'},{av:'AV16IsAuthorized_SecFunctionalityDescription',fld:'vISAUTHORIZED_SECFUNCTIONALITYDESCRIPTION',pic:'',hsh:true},{av:'AV42IsAuthorized_SecParentFunctionalityDescription',fld:'vISAUTHORIZED_SECPARENTFUNCTIONALITYDESCRIPTION',pic:'',hsh:true},{ctrl:'vSECFUNCTIONALITYTYPE'},{av:'AV14SecFunctionalityType',fld:'vSECFUNCTIONALITYTYPE',pic:'Z9'},{av:'this.DDO_GRIDContainer.GridInternalName',ctrl:'DDO_GRID',prop:'GridInternalName'},{av:'gx.fn.getCtrlProperty("SECROLEID","Visible")',ctrl:'SECROLEID',prop:'Visible'},{av:'AV20OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV58DDO_TitleSettingsIcons',fld:'vDDO_TITLESETTINGSICONS',pic:''},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'},{av:'AV64ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYDESCRIPTION1","Visible")',ctrl:'vSECFUNCTIONALITYDESCRIPTION1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYKEY1","Visible")',ctrl:'vSECFUNCTIONALITYKEY1',prop:'Visible'},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYDESCRIPTION2","Visible")',ctrl:'vSECFUNCTIONALITYDESCRIPTION2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYKEY2","Visible")',ctrl:'vSECFUNCTIONALITYKEY2',prop:'Visible'},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYDESCRIPTION3","Visible")',ctrl:'vSECFUNCTIONALITYDESCRIPTION3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYKEY3","Visible")',ctrl:'vSECFUNCTIONALITYKEY3',prop:'Visible'},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV17GridState',fld:'vGRIDSTATE',pic:''},{av:'AV21OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_GRIDContainer.SortedStatus',ctrl:'DDO_GRID',prop:'SortedStatus'},{av:'AV56TFSecParentFunctionalityDescription_Sel',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION_SEL',pic:''},{av:'AV55TFSecParentFunctionalityDescription',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV67TFSecFunctionalityType_SelsJson',fld:'vTFSECFUNCTIONALITYTYPE_SELSJSON',pic:''},{av:'AV68TFSecFunctionalityType_Sels',fld:'vTFSECFUNCTIONALITYTYPE_SELS',pic:''},{av:'AV45TFSecFunctionalityKey_Sel',fld:'vTFSECFUNCTIONALITYKEY_SEL',pic:''},{av:'AV44TFSecFunctionalityKey',fld:'vTFSECFUNCTIONALITYKEY',pic:''},{av:'this.DDO_GRIDContainer.SelectedValue_set',ctrl:'DDO_GRID',prop:'SelectedValue_set'},{av:'this.DDO_GRIDContainer.FilteredText_set',ctrl:'DDO_GRID',prop:'FilteredText_set'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'},{av:'AV23DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV24SecFunctionalityDescription1',fld:'vSECFUNCTIONALITYDESCRIPTION1',pic:''},{av:'AV25SecFunctionalityKey1',fld:'vSECFUNCTIONALITYKEY1',pic:''},{av:'AV26DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV28DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV29SecFunctionalityDescription2',fld:'vSECFUNCTIONALITYDESCRIPTION2',pic:''},{av:'AV30SecFunctionalityKey2',fld:'vSECFUNCTIONALITYKEY2',pic:''},{av:'AV31DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV33DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV34SecFunctionalityDescription3',fld:'vSECFUNCTIONALITYDESCRIPTION3',pic:''},{av:'AV35SecFunctionalityKey3',fld:'vSECFUNCTIONALITYKEY3',pic:''}]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vSECFUNCTIONALITYTYPE'},{av:'AV14SecFunctionalityType',fld:'vSECFUNCTIONALITYTYPE',pic:'Z9'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV22DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV23DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV24SecFunctionalityDescription1',fld:'vSECFUNCTIONALITYDESCRIPTION1',pic:''},{av:'AV25SecFunctionalityKey1',fld:'vSECFUNCTIONALITYKEY1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV27DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV28DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV29SecFunctionalityDescription2',fld:'vSECFUNCTIONALITYDESCRIPTION2',pic:''},{av:'AV30SecFunctionalityKey2',fld:'vSECFUNCTIONALITYKEY2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV32DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV33DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV34SecFunctionalityDescription3',fld:'vSECFUNCTIONALITYDESCRIPTION3',pic:''},{av:'AV35SecFunctionalityKey3',fld:'vSECFUNCTIONALITYKEY3',pic:''},{av:'AV8SecRoleId',fld:'vSECROLEID',pic:'ZZZ9'},{av:'AV60ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV26DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV31DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV76Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV20OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV21OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV44TFSecFunctionalityKey',fld:'vTFSECFUNCTIONALITYKEY',pic:''},{av:'AV45TFSecFunctionalityKey_Sel',fld:'vTFSECFUNCTIONALITYKEY_SEL',pic:''},{av:'AV68TFSecFunctionalityType_Sels',fld:'vTFSECFUNCTIONALITYTYPE_SELS',pic:''},{av:'AV55TFSecParentFunctionalityDescription',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV56TFSecParentFunctionalityDescription_Sel',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION_SEL',pic:''},{av:'AV17GridState',fld:'vGRIDSTATE',pic:''},{av:'AV37DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV36DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV73IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'AV41IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV40IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV16IsAuthorized_SecFunctionalityDescription',fld:'vISAUTHORIZED_SECFUNCTIONALITYDESCRIPTION',pic:'',hsh:true},{av:'AV42IsAuthorized_SecParentFunctionalityDescription',fld:'vISAUTHORIZED_SECPARENTFUNCTIONALITYDESCRIPTION',pic:'',hsh:true},{av:'A139SecRoleId',fld:'SECROLEID',pic:'ZZZ9'},{av:'sPrefix'},{av:'this.GRIDPAGINATIONBARContainer.SelectedPage',ctrl:'GRIDPAGINATIONBAR',prop:'SelectedPage'}],[]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vSECFUNCTIONALITYTYPE'},{av:'AV14SecFunctionalityType',fld:'vSECFUNCTIONALITYTYPE',pic:'Z9'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV22DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV23DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV24SecFunctionalityDescription1',fld:'vSECFUNCTIONALITYDESCRIPTION1',pic:''},{av:'AV25SecFunctionalityKey1',fld:'vSECFUNCTIONALITYKEY1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV27DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV28DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV29SecFunctionalityDescription2',fld:'vSECFUNCTIONALITYDESCRIPTION2',pic:''},{av:'AV30SecFunctionalityKey2',fld:'vSECFUNCTIONALITYKEY2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV32DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV33DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV34SecFunctionalityDescription3',fld:'vSECFUNCTIONALITYDESCRIPTION3',pic:''},{av:'AV35SecFunctionalityKey3',fld:'vSECFUNCTIONALITYKEY3',pic:''},{av:'AV8SecRoleId',fld:'vSECROLEID',pic:'ZZZ9'},{av:'AV60ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV26DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV31DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV76Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV20OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV21OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV44TFSecFunctionalityKey',fld:'vTFSECFUNCTIONALITYKEY',pic:''},{av:'AV45TFSecFunctionalityKey_Sel',fld:'vTFSECFUNCTIONALITYKEY_SEL',pic:''},{av:'AV68TFSecFunctionalityType_Sels',fld:'vTFSECFUNCTIONALITYTYPE_SELS',pic:''},{av:'AV55TFSecParentFunctionalityDescription',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV56TFSecParentFunctionalityDescription_Sel',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION_SEL',pic:''},{av:'AV17GridState',fld:'vGRIDSTATE',pic:''},{av:'AV37DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV36DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV73IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'AV41IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV40IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV16IsAuthorized_SecFunctionalityDescription',fld:'vISAUTHORIZED_SECFUNCTIONALITYDESCRIPTION',pic:'',hsh:true},{av:'AV42IsAuthorized_SecParentFunctionalityDescription',fld:'vISAUTHORIZED_SECPARENTFUNCTIONALITYDESCRIPTION',pic:'',hsh:true},{av:'A139SecRoleId',fld:'SECROLEID',pic:'ZZZ9'},{av:'sPrefix'},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'}],[{ctrl:'GRID',prop:'Rows'}]];
   this.EvtParms["DDO_GRID.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vSECFUNCTIONALITYTYPE'},{av:'AV14SecFunctionalityType',fld:'vSECFUNCTIONALITYTYPE',pic:'Z9'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV22DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV23DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV24SecFunctionalityDescription1',fld:'vSECFUNCTIONALITYDESCRIPTION1',pic:''},{av:'AV25SecFunctionalityKey1',fld:'vSECFUNCTIONALITYKEY1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV27DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV28DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV29SecFunctionalityDescription2',fld:'vSECFUNCTIONALITYDESCRIPTION2',pic:''},{av:'AV30SecFunctionalityKey2',fld:'vSECFUNCTIONALITYKEY2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV32DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV33DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV34SecFunctionalityDescription3',fld:'vSECFUNCTIONALITYDESCRIPTION3',pic:''},{av:'AV35SecFunctionalityKey3',fld:'vSECFUNCTIONALITYKEY3',pic:''},{av:'AV8SecRoleId',fld:'vSECROLEID',pic:'ZZZ9'},{av:'AV60ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV26DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV31DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV76Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV20OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV21OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV44TFSecFunctionalityKey',fld:'vTFSECFUNCTIONALITYKEY',pic:''},{av:'AV45TFSecFunctionalityKey_Sel',fld:'vTFSECFUNCTIONALITYKEY_SEL',pic:''},{av:'AV68TFSecFunctionalityType_Sels',fld:'vTFSECFUNCTIONALITYTYPE_SELS',pic:''},{av:'AV55TFSecParentFunctionalityDescription',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV56TFSecParentFunctionalityDescription_Sel',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION_SEL',pic:''},{av:'AV17GridState',fld:'vGRIDSTATE',pic:''},{av:'AV37DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV36DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV73IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'AV41IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV40IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV16IsAuthorized_SecFunctionalityDescription',fld:'vISAUTHORIZED_SECFUNCTIONALITYDESCRIPTION',pic:'',hsh:true},{av:'AV42IsAuthorized_SecParentFunctionalityDescription',fld:'vISAUTHORIZED_SECPARENTFUNCTIONALITYDESCRIPTION',pic:'',hsh:true},{av:'A139SecRoleId',fld:'SECROLEID',pic:'ZZZ9'},{av:'sPrefix'},{av:'this.DDO_GRIDContainer.ActiveEventKey',ctrl:'DDO_GRID',prop:'ActiveEventKey'},{av:'this.DDO_GRIDContainer.SelectedValue_get',ctrl:'DDO_GRID',prop:'SelectedValue_get'},{av:'this.DDO_GRIDContainer.SelectedColumn',ctrl:'DDO_GRID',prop:'SelectedColumn'},{av:'this.DDO_GRIDContainer.FilteredText_get',ctrl:'DDO_GRID',prop:'FilteredText_get'}],[{av:'AV20OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV21OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV44TFSecFunctionalityKey',fld:'vTFSECFUNCTIONALITYKEY',pic:''},{av:'AV45TFSecFunctionalityKey_Sel',fld:'vTFSECFUNCTIONALITYKEY_SEL',pic:''},{av:'AV67TFSecFunctionalityType_SelsJson',fld:'vTFSECFUNCTIONALITYTYPE_SELSJSON',pic:''},{av:'AV68TFSecFunctionalityType_Sels',fld:'vTFSECFUNCTIONALITYTYPE_SELS',pic:''},{av:'AV55TFSecParentFunctionalityDescription',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV56TFSecParentFunctionalityDescription_Sel',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION_SEL',pic:''},{av:'this.DDO_GRIDContainer.SortedStatus',ctrl:'DDO_GRID',prop:'SortedStatus'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV73IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'A136SecFunctionalityId',fld:'SECFUNCTIONALITYID',pic:'ZZZZZZZZZ9'},{av:'A139SecRoleId',fld:'SECROLEID',pic:'ZZZ9'},{av:'AV41IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV40IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV16IsAuthorized_SecFunctionalityDescription',fld:'vISAUTHORIZED_SECFUNCTIONALITYDESCRIPTION',pic:'',hsh:true},{av:'AV42IsAuthorized_SecParentFunctionalityDescription',fld:'vISAUTHORIZED_SECPARENTFUNCTIONALITYDESCRIPTION',pic:'',hsh:true}],[{av:'AV72Display',fld:'vDISPLAY',pic:''},{av:'gx.fn.getCtrlProperty("vDISPLAY","Link")',ctrl:'vDISPLAY',prop:'Link'},{av:'AV39Update',fld:'vUPDATE',pic:''},{av:'gx.fn.getCtrlProperty("vUPDATE","Link")',ctrl:'vUPDATE',prop:'Link'},{av:'AV38Delete',fld:'vDELETE',pic:''},{av:'gx.fn.getCtrlProperty("vDELETE","Link")',ctrl:'vDELETE',prop:'Link'},{av:'gx.fn.getCtrlProperty("SECFUNCTIONALITYDESCRIPTION","Link")',ctrl:'SECFUNCTIONALITYDESCRIPTION',prop:'Link'},{av:'gx.fn.getCtrlProperty("SECPARENTFUNCTIONALITYDESCRIPTION","Link")',ctrl:'SECPARENTFUNCTIONALITYDESCRIPTION',prop:'Link'}]];
   this.EvtParms["'ADDDYNAMICFILTERS1'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vSECFUNCTIONALITYTYPE'},{av:'AV14SecFunctionalityType',fld:'vSECFUNCTIONALITYTYPE',pic:'Z9'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV22DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV23DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV24SecFunctionalityDescription1',fld:'vSECFUNCTIONALITYDESCRIPTION1',pic:''},{av:'AV25SecFunctionalityKey1',fld:'vSECFUNCTIONALITYKEY1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV27DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV28DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV29SecFunctionalityDescription2',fld:'vSECFUNCTIONALITYDESCRIPTION2',pic:''},{av:'AV30SecFunctionalityKey2',fld:'vSECFUNCTIONALITYKEY2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV32DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV33DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV34SecFunctionalityDescription3',fld:'vSECFUNCTIONALITYDESCRIPTION3',pic:''},{av:'AV35SecFunctionalityKey3',fld:'vSECFUNCTIONALITYKEY3',pic:''},{av:'AV8SecRoleId',fld:'vSECROLEID',pic:'ZZZ9'},{av:'AV60ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV26DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV31DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV76Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV20OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV21OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV44TFSecFunctionalityKey',fld:'vTFSECFUNCTIONALITYKEY',pic:''},{av:'AV45TFSecFunctionalityKey_Sel',fld:'vTFSECFUNCTIONALITYKEY_SEL',pic:''},{av:'AV68TFSecFunctionalityType_Sels',fld:'vTFSECFUNCTIONALITYTYPE_SELS',pic:''},{av:'AV55TFSecParentFunctionalityDescription',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV56TFSecParentFunctionalityDescription_Sel',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION_SEL',pic:''},{av:'AV17GridState',fld:'vGRIDSTATE',pic:''},{av:'AV37DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV36DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV73IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'AV41IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV40IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV16IsAuthorized_SecFunctionalityDescription',fld:'vISAUTHORIZED_SECFUNCTIONALITYDESCRIPTION',pic:'',hsh:true},{av:'AV42IsAuthorized_SecParentFunctionalityDescription',fld:'vISAUTHORIZED_SECPARENTFUNCTIONALITYDESCRIPTION',pic:'',hsh:true},{av:'A139SecRoleId',fld:'SECROLEID',pic:'ZZZ9'},{av:'sPrefix'}],[{av:'AV26DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'},{av:'AV60ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV23DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV28DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV33DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV70GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV71GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV73IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:'vDISPLAY',prop:'Visible'},{av:'AV41IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:'vUPDATE',prop:'Visible'},{av:'AV40IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:'vDELETE',prop:'Visible'},{av:'AV64ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV17GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["'REMOVEDYNAMICFILTERS1'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vSECFUNCTIONALITYTYPE'},{av:'AV14SecFunctionalityType',fld:'vSECFUNCTIONALITYTYPE',pic:'Z9'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV22DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV23DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV24SecFunctionalityDescription1',fld:'vSECFUNCTIONALITYDESCRIPTION1',pic:''},{av:'AV25SecFunctionalityKey1',fld:'vSECFUNCTIONALITYKEY1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV27DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV28DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV29SecFunctionalityDescription2',fld:'vSECFUNCTIONALITYDESCRIPTION2',pic:''},{av:'AV30SecFunctionalityKey2',fld:'vSECFUNCTIONALITYKEY2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV32DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV33DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV34SecFunctionalityDescription3',fld:'vSECFUNCTIONALITYDESCRIPTION3',pic:''},{av:'AV35SecFunctionalityKey3',fld:'vSECFUNCTIONALITYKEY3',pic:''},{av:'AV8SecRoleId',fld:'vSECROLEID',pic:'ZZZ9'},{av:'AV60ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV26DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV31DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV76Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV20OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV21OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV44TFSecFunctionalityKey',fld:'vTFSECFUNCTIONALITYKEY',pic:''},{av:'AV45TFSecFunctionalityKey_Sel',fld:'vTFSECFUNCTIONALITYKEY_SEL',pic:''},{av:'AV68TFSecFunctionalityType_Sels',fld:'vTFSECFUNCTIONALITYTYPE_SELS',pic:''},{av:'AV55TFSecParentFunctionalityDescription',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV56TFSecParentFunctionalityDescription_Sel',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION_SEL',pic:''},{av:'AV17GridState',fld:'vGRIDSTATE',pic:''},{av:'AV37DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV36DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV73IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'AV41IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV40IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV16IsAuthorized_SecFunctionalityDescription',fld:'vISAUTHORIZED_SECFUNCTIONALITYDESCRIPTION',pic:'',hsh:true},{av:'AV42IsAuthorized_SecParentFunctionalityDescription',fld:'vISAUTHORIZED_SECPARENTFUNCTIONALITYDESCRIPTION',pic:'',hsh:true},{av:'A139SecRoleId',fld:'SECROLEID',pic:'ZZZ9'},{av:'sPrefix'}],[{av:'AV36DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV37DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV17GridState',fld:'vGRIDSTATE',pic:''},{av:'AV26DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV27DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV28DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV29SecFunctionalityDescription2',fld:'vSECFUNCTIONALITYDESCRIPTION2',pic:''},{av:'AV31DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV32DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV33DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV34SecFunctionalityDescription3',fld:'vSECFUNCTIONALITYDESCRIPTION3',pic:''},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV22DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV23DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV24SecFunctionalityDescription1',fld:'vSECFUNCTIONALITYDESCRIPTION1',pic:''},{av:'AV25SecFunctionalityKey1',fld:'vSECFUNCTIONALITYKEY1',pic:''},{av:'gx.fn.getCtrlProperty("JSDYNAMICFILTERS","Caption")',ctrl:'JSDYNAMICFILTERS',prop:'Caption'},{av:'AV30SecFunctionalityKey2',fld:'vSECFUNCTIONALITYKEY2',pic:''},{av:'AV35SecFunctionalityKey3',fld:'vSECFUNCTIONALITYKEY3',pic:''},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYDESCRIPTION2","Visible")',ctrl:'vSECFUNCTIONALITYDESCRIPTION2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYKEY2","Visible")',ctrl:'vSECFUNCTIONALITYKEY2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYDESCRIPTION3","Visible")',ctrl:'vSECFUNCTIONALITYDESCRIPTION3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYKEY3","Visible")',ctrl:'vSECFUNCTIONALITYKEY3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYDESCRIPTION1","Visible")',ctrl:'vSECFUNCTIONALITYDESCRIPTION1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYKEY1","Visible")',ctrl:'vSECFUNCTIONALITYKEY1',prop:'Visible'},{av:'AV60ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV70GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV71GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV73IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:'vDISPLAY',prop:'Visible'},{av:'AV41IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:'vUPDATE',prop:'Visible'},{av:'AV40IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:'vDELETE',prop:'Visible'},{av:'AV64ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''}]];
   this.EvtParms["VDYNAMICFILTERSSELECTOR1.CLICK"] = [[{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV22DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''}],[{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV23DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYDESCRIPTION1","Visible")',ctrl:'vSECFUNCTIONALITYDESCRIPTION1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYKEY1","Visible")',ctrl:'vSECFUNCTIONALITYKEY1',prop:'Visible'}]];
   this.EvtParms["'ADDDYNAMICFILTERS2'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vSECFUNCTIONALITYTYPE'},{av:'AV14SecFunctionalityType',fld:'vSECFUNCTIONALITYTYPE',pic:'Z9'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV22DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV23DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV24SecFunctionalityDescription1',fld:'vSECFUNCTIONALITYDESCRIPTION1',pic:''},{av:'AV25SecFunctionalityKey1',fld:'vSECFUNCTIONALITYKEY1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV27DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV28DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV29SecFunctionalityDescription2',fld:'vSECFUNCTIONALITYDESCRIPTION2',pic:''},{av:'AV30SecFunctionalityKey2',fld:'vSECFUNCTIONALITYKEY2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV32DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV33DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV34SecFunctionalityDescription3',fld:'vSECFUNCTIONALITYDESCRIPTION3',pic:''},{av:'AV35SecFunctionalityKey3',fld:'vSECFUNCTIONALITYKEY3',pic:''},{av:'AV8SecRoleId',fld:'vSECROLEID',pic:'ZZZ9'},{av:'AV60ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV26DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV31DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV76Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV20OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV21OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV44TFSecFunctionalityKey',fld:'vTFSECFUNCTIONALITYKEY',pic:''},{av:'AV45TFSecFunctionalityKey_Sel',fld:'vTFSECFUNCTIONALITYKEY_SEL',pic:''},{av:'AV68TFSecFunctionalityType_Sels',fld:'vTFSECFUNCTIONALITYTYPE_SELS',pic:''},{av:'AV55TFSecParentFunctionalityDescription',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV56TFSecParentFunctionalityDescription_Sel',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION_SEL',pic:''},{av:'AV17GridState',fld:'vGRIDSTATE',pic:''},{av:'AV37DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV36DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV73IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'AV41IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV40IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV16IsAuthorized_SecFunctionalityDescription',fld:'vISAUTHORIZED_SECFUNCTIONALITYDESCRIPTION',pic:'',hsh:true},{av:'AV42IsAuthorized_SecParentFunctionalityDescription',fld:'vISAUTHORIZED_SECPARENTFUNCTIONALITYDESCRIPTION',pic:'',hsh:true},{av:'A139SecRoleId',fld:'SECROLEID',pic:'ZZZ9'},{av:'sPrefix'}],[{av:'AV31DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'},{av:'AV60ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV23DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV28DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV33DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV70GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV71GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV73IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:'vDISPLAY',prop:'Visible'},{av:'AV41IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:'vUPDATE',prop:'Visible'},{av:'AV40IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:'vDELETE',prop:'Visible'},{av:'AV64ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV17GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["'REMOVEDYNAMICFILTERS2'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vSECFUNCTIONALITYTYPE'},{av:'AV14SecFunctionalityType',fld:'vSECFUNCTIONALITYTYPE',pic:'Z9'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV22DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV23DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV24SecFunctionalityDescription1',fld:'vSECFUNCTIONALITYDESCRIPTION1',pic:''},{av:'AV25SecFunctionalityKey1',fld:'vSECFUNCTIONALITYKEY1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV27DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV28DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV29SecFunctionalityDescription2',fld:'vSECFUNCTIONALITYDESCRIPTION2',pic:''},{av:'AV30SecFunctionalityKey2',fld:'vSECFUNCTIONALITYKEY2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV32DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV33DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV34SecFunctionalityDescription3',fld:'vSECFUNCTIONALITYDESCRIPTION3',pic:''},{av:'AV35SecFunctionalityKey3',fld:'vSECFUNCTIONALITYKEY3',pic:''},{av:'AV8SecRoleId',fld:'vSECROLEID',pic:'ZZZ9'},{av:'AV60ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV26DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV31DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV76Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV20OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV21OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV44TFSecFunctionalityKey',fld:'vTFSECFUNCTIONALITYKEY',pic:''},{av:'AV45TFSecFunctionalityKey_Sel',fld:'vTFSECFUNCTIONALITYKEY_SEL',pic:''},{av:'AV68TFSecFunctionalityType_Sels',fld:'vTFSECFUNCTIONALITYTYPE_SELS',pic:''},{av:'AV55TFSecParentFunctionalityDescription',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV56TFSecParentFunctionalityDescription_Sel',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION_SEL',pic:''},{av:'AV17GridState',fld:'vGRIDSTATE',pic:''},{av:'AV37DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV36DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV73IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'AV41IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV40IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV16IsAuthorized_SecFunctionalityDescription',fld:'vISAUTHORIZED_SECFUNCTIONALITYDESCRIPTION',pic:'',hsh:true},{av:'AV42IsAuthorized_SecParentFunctionalityDescription',fld:'vISAUTHORIZED_SECPARENTFUNCTIONALITYDESCRIPTION',pic:'',hsh:true},{av:'A139SecRoleId',fld:'SECROLEID',pic:'ZZZ9'},{av:'sPrefix'}],[{av:'AV36DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV26DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV17GridState',fld:'vGRIDSTATE',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV27DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV28DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV29SecFunctionalityDescription2',fld:'vSECFUNCTIONALITYDESCRIPTION2',pic:''},{av:'AV31DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV32DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV33DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV34SecFunctionalityDescription3',fld:'vSECFUNCTIONALITYDESCRIPTION3',pic:''},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV22DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV23DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV24SecFunctionalityDescription1',fld:'vSECFUNCTIONALITYDESCRIPTION1',pic:''},{av:'AV25SecFunctionalityKey1',fld:'vSECFUNCTIONALITYKEY1',pic:''},{av:'gx.fn.getCtrlProperty("JSDYNAMICFILTERS","Caption")',ctrl:'JSDYNAMICFILTERS',prop:'Caption'},{av:'AV30SecFunctionalityKey2',fld:'vSECFUNCTIONALITYKEY2',pic:''},{av:'AV35SecFunctionalityKey3',fld:'vSECFUNCTIONALITYKEY3',pic:''},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYDESCRIPTION2","Visible")',ctrl:'vSECFUNCTIONALITYDESCRIPTION2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYKEY2","Visible")',ctrl:'vSECFUNCTIONALITYKEY2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYDESCRIPTION3","Visible")',ctrl:'vSECFUNCTIONALITYDESCRIPTION3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYKEY3","Visible")',ctrl:'vSECFUNCTIONALITYKEY3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYDESCRIPTION1","Visible")',ctrl:'vSECFUNCTIONALITYDESCRIPTION1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYKEY1","Visible")',ctrl:'vSECFUNCTIONALITYKEY1',prop:'Visible'},{av:'AV60ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV70GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV71GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV73IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:'vDISPLAY',prop:'Visible'},{av:'AV41IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:'vUPDATE',prop:'Visible'},{av:'AV40IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:'vDELETE',prop:'Visible'},{av:'AV64ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''}]];
   this.EvtParms["VDYNAMICFILTERSSELECTOR2.CLICK"] = [[{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV27DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''}],[{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV28DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYDESCRIPTION2","Visible")',ctrl:'vSECFUNCTIONALITYDESCRIPTION2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYKEY2","Visible")',ctrl:'vSECFUNCTIONALITYKEY2',prop:'Visible'}]];
   this.EvtParms["'REMOVEDYNAMICFILTERS3'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vSECFUNCTIONALITYTYPE'},{av:'AV14SecFunctionalityType',fld:'vSECFUNCTIONALITYTYPE',pic:'Z9'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV22DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV23DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV24SecFunctionalityDescription1',fld:'vSECFUNCTIONALITYDESCRIPTION1',pic:''},{av:'AV25SecFunctionalityKey1',fld:'vSECFUNCTIONALITYKEY1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV27DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV28DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV29SecFunctionalityDescription2',fld:'vSECFUNCTIONALITYDESCRIPTION2',pic:''},{av:'AV30SecFunctionalityKey2',fld:'vSECFUNCTIONALITYKEY2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV32DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV33DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV34SecFunctionalityDescription3',fld:'vSECFUNCTIONALITYDESCRIPTION3',pic:''},{av:'AV35SecFunctionalityKey3',fld:'vSECFUNCTIONALITYKEY3',pic:''},{av:'AV8SecRoleId',fld:'vSECROLEID',pic:'ZZZ9'},{av:'AV60ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV26DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV31DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV76Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV20OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV21OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV44TFSecFunctionalityKey',fld:'vTFSECFUNCTIONALITYKEY',pic:''},{av:'AV45TFSecFunctionalityKey_Sel',fld:'vTFSECFUNCTIONALITYKEY_SEL',pic:''},{av:'AV68TFSecFunctionalityType_Sels',fld:'vTFSECFUNCTIONALITYTYPE_SELS',pic:''},{av:'AV55TFSecParentFunctionalityDescription',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV56TFSecParentFunctionalityDescription_Sel',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION_SEL',pic:''},{av:'AV17GridState',fld:'vGRIDSTATE',pic:''},{av:'AV37DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV36DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV73IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'AV41IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV40IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV16IsAuthorized_SecFunctionalityDescription',fld:'vISAUTHORIZED_SECFUNCTIONALITYDESCRIPTION',pic:'',hsh:true},{av:'AV42IsAuthorized_SecParentFunctionalityDescription',fld:'vISAUTHORIZED_SECPARENTFUNCTIONALITYDESCRIPTION',pic:'',hsh:true},{av:'A139SecRoleId',fld:'SECROLEID',pic:'ZZZ9'},{av:'sPrefix'}],[{av:'AV36DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV31DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV17GridState',fld:'vGRIDSTATE',pic:''},{av:'AV26DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV27DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV28DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV29SecFunctionalityDescription2',fld:'vSECFUNCTIONALITYDESCRIPTION2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV32DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV33DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV34SecFunctionalityDescription3',fld:'vSECFUNCTIONALITYDESCRIPTION3',pic:''},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV22DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV23DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV24SecFunctionalityDescription1',fld:'vSECFUNCTIONALITYDESCRIPTION1',pic:''},{av:'AV25SecFunctionalityKey1',fld:'vSECFUNCTIONALITYKEY1',pic:''},{av:'gx.fn.getCtrlProperty("JSDYNAMICFILTERS","Caption")',ctrl:'JSDYNAMICFILTERS',prop:'Caption'},{av:'AV30SecFunctionalityKey2',fld:'vSECFUNCTIONALITYKEY2',pic:''},{av:'AV35SecFunctionalityKey3',fld:'vSECFUNCTIONALITYKEY3',pic:''},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYDESCRIPTION2","Visible")',ctrl:'vSECFUNCTIONALITYDESCRIPTION2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYKEY2","Visible")',ctrl:'vSECFUNCTIONALITYKEY2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYDESCRIPTION3","Visible")',ctrl:'vSECFUNCTIONALITYDESCRIPTION3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYKEY3","Visible")',ctrl:'vSECFUNCTIONALITYKEY3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYDESCRIPTION1","Visible")',ctrl:'vSECFUNCTIONALITYDESCRIPTION1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYKEY1","Visible")',ctrl:'vSECFUNCTIONALITYKEY1',prop:'Visible'},{av:'AV60ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV70GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV71GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV73IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:'vDISPLAY',prop:'Visible'},{av:'AV41IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:'vUPDATE',prop:'Visible'},{av:'AV40IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:'vDELETE',prop:'Visible'},{av:'AV64ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''}]];
   this.EvtParms["VDYNAMICFILTERSSELECTOR3.CLICK"] = [[{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV32DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''}],[{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV33DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYDESCRIPTION3","Visible")',ctrl:'vSECFUNCTIONALITYDESCRIPTION3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYKEY3","Visible")',ctrl:'vSECFUNCTIONALITYKEY3',prop:'Visible'}]];
   this.EvtParms["DDO_MANAGEFILTERS.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vSECFUNCTIONALITYTYPE'},{av:'AV14SecFunctionalityType',fld:'vSECFUNCTIONALITYTYPE',pic:'Z9'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV22DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV23DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV24SecFunctionalityDescription1',fld:'vSECFUNCTIONALITYDESCRIPTION1',pic:''},{av:'AV25SecFunctionalityKey1',fld:'vSECFUNCTIONALITYKEY1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV27DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV28DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV29SecFunctionalityDescription2',fld:'vSECFUNCTIONALITYDESCRIPTION2',pic:''},{av:'AV30SecFunctionalityKey2',fld:'vSECFUNCTIONALITYKEY2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV32DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV33DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV34SecFunctionalityDescription3',fld:'vSECFUNCTIONALITYDESCRIPTION3',pic:''},{av:'AV35SecFunctionalityKey3',fld:'vSECFUNCTIONALITYKEY3',pic:''},{av:'AV8SecRoleId',fld:'vSECROLEID',pic:'ZZZ9'},{av:'AV60ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV26DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV31DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV76Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV20OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV21OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV44TFSecFunctionalityKey',fld:'vTFSECFUNCTIONALITYKEY',pic:''},{av:'AV45TFSecFunctionalityKey_Sel',fld:'vTFSECFUNCTIONALITYKEY_SEL',pic:''},{av:'AV68TFSecFunctionalityType_Sels',fld:'vTFSECFUNCTIONALITYTYPE_SELS',pic:''},{av:'AV55TFSecParentFunctionalityDescription',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV56TFSecParentFunctionalityDescription_Sel',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION_SEL',pic:''},{av:'AV17GridState',fld:'vGRIDSTATE',pic:''},{av:'AV37DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV36DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV73IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'AV41IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV40IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV16IsAuthorized_SecFunctionalityDescription',fld:'vISAUTHORIZED_SECFUNCTIONALITYDESCRIPTION',pic:'',hsh:true},{av:'AV42IsAuthorized_SecParentFunctionalityDescription',fld:'vISAUTHORIZED_SECPARENTFUNCTIONALITYDESCRIPTION',pic:'',hsh:true},{av:'A139SecRoleId',fld:'SECROLEID',pic:'ZZZ9'},{av:'sPrefix'},{av:'this.DDO_MANAGEFILTERSContainer.ActiveEventKey',ctrl:'DDO_MANAGEFILTERS',prop:'ActiveEventKey'},{av:'AV67TFSecFunctionalityType_SelsJson',fld:'vTFSECFUNCTIONALITYTYPE_SELSJSON',pic:''}],[{av:'AV60ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV17GridState',fld:'vGRIDSTATE',pic:''},{av:'AV20OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV21OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'vSECFUNCTIONALITYTYPE'},{av:'AV14SecFunctionalityType',fld:'vSECFUNCTIONALITYTYPE',pic:'Z9'},{av:'AV44TFSecFunctionalityKey',fld:'vTFSECFUNCTIONALITYKEY',pic:''},{av:'AV45TFSecFunctionalityKey_Sel',fld:'vTFSECFUNCTIONALITYKEY_SEL',pic:''},{av:'AV68TFSecFunctionalityType_Sels',fld:'vTFSECFUNCTIONALITYTYPE_SELS',pic:''},{av:'AV55TFSecParentFunctionalityDescription',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV56TFSecParentFunctionalityDescription_Sel',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION_SEL',pic:''},{av:'this.DDO_GRIDContainer.SelectedValue_set',ctrl:'DDO_GRID',prop:'SelectedValue_set'},{av:'this.DDO_GRIDContainer.FilteredText_set',ctrl:'DDO_GRID',prop:'FilteredText_set'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV22DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV23DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV24SecFunctionalityDescription1',fld:'vSECFUNCTIONALITYDESCRIPTION1',pic:''},{av:'this.DDO_GRIDContainer.SortedStatus',ctrl:'DDO_GRID',prop:'SortedStatus'},{av:'AV67TFSecFunctionalityType_SelsJson',fld:'vTFSECFUNCTIONALITYTYPE_SELSJSON',pic:''},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'},{av:'AV25SecFunctionalityKey1',fld:'vSECFUNCTIONALITYKEY1',pic:''},{av:'gx.fn.getCtrlProperty("JSDYNAMICFILTERS","Caption")',ctrl:'JSDYNAMICFILTERS',prop:'Caption'},{av:'AV26DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV27DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV28DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV29SecFunctionalityDescription2',fld:'vSECFUNCTIONALITYDESCRIPTION2',pic:''},{av:'AV30SecFunctionalityKey2',fld:'vSECFUNCTIONALITYKEY2',pic:''},{av:'AV31DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV32DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV33DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV34SecFunctionalityDescription3',fld:'vSECFUNCTIONALITYDESCRIPTION3',pic:''},{av:'AV35SecFunctionalityKey3',fld:'vSECFUNCTIONALITYKEY3',pic:''},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYDESCRIPTION1","Visible")',ctrl:'vSECFUNCTIONALITYDESCRIPTION1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYKEY1","Visible")',ctrl:'vSECFUNCTIONALITYKEY1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYDESCRIPTION2","Visible")',ctrl:'vSECFUNCTIONALITYDESCRIPTION2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYKEY2","Visible")',ctrl:'vSECFUNCTIONALITYKEY2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYDESCRIPTION3","Visible")',ctrl:'vSECFUNCTIONALITYDESCRIPTION3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECFUNCTIONALITYKEY3","Visible")',ctrl:'vSECFUNCTIONALITYKEY3',prop:'Visible'},{av:'AV70GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV71GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV73IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:'vDISPLAY',prop:'Visible'},{av:'AV41IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:'vUPDATE',prop:'Visible'},{av:'AV40IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:'vDELETE',prop:'Visible'},{av:'AV64ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''}]];
   this.EvtParms["VALIDV_SECFUNCTIONALITYTYPE"] = [[],[]];
   this.EvtParms["VALID_SECFUNCTIONALITYID"] = [[],[]];
   this.setVCMap("AV60ManageFiltersExecutionStep", "vMANAGEFILTERSEXECUTIONSTEP", 0, "int", 1, 0);
   this.setVCMap("AV26DynamicFiltersEnabled2", "vDYNAMICFILTERSENABLED2", 0, "boolean", 4, 0);
   this.setVCMap("AV31DynamicFiltersEnabled3", "vDYNAMICFILTERSENABLED3", 0, "boolean", 4, 0);
   this.setVCMap("AV76Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV20OrderedBy", "vORDEREDBY", 0, "int", 4, 0);
   this.setVCMap("AV21OrderedDsc", "vORDEREDDSC", 0, "boolean", 4, 0);
   this.setVCMap("AV44TFSecFunctionalityKey", "vTFSECFUNCTIONALITYKEY", 0, "svchar", 100, 0);
   this.setVCMap("AV45TFSecFunctionalityKey_Sel", "vTFSECFUNCTIONALITYKEY_SEL", 0, "svchar", 100, 0);
   this.setVCMap("AV68TFSecFunctionalityType_Sels", "vTFSECFUNCTIONALITYTYPE_SELS", 0, "Collint", 0, 0);
   this.setVCMap("AV55TFSecParentFunctionalityDescription", "vTFSECPARENTFUNCTIONALITYDESCRIPTION", 0, "svchar", 100, 0);
   this.setVCMap("AV56TFSecParentFunctionalityDescription_Sel", "vTFSECPARENTFUNCTIONALITYDESCRIPTION_SEL", 0, "svchar", 100, 0);
   this.setVCMap("AV8SecRoleId", "vSECROLEID", 0, "int", 4, 0);
   this.setVCMap("AV17GridState", "vGRIDSTATE", 0, "WWPBaseObjects\WWPGridState", 0, 0);
   this.setVCMap("AV37DynamicFiltersIgnoreFirst", "vDYNAMICFILTERSIGNOREFIRST", 0, "boolean", 4, 0);
   this.setVCMap("AV36DynamicFiltersRemoving", "vDYNAMICFILTERSREMOVING", 0, "boolean", 4, 0);
   this.setVCMap("AV73IsAuthorized_Display", "vISAUTHORIZED_DISPLAY", 0, "boolean", 4, 0);
   this.setVCMap("AV41IsAuthorized_Update", "vISAUTHORIZED_UPDATE", 0, "boolean", 4, 0);
   this.setVCMap("AV40IsAuthorized_Delete", "vISAUTHORIZED_DELETE", 0, "boolean", 4, 0);
   this.setVCMap("AV16IsAuthorized_SecFunctionalityDescription", "vISAUTHORIZED_SECFUNCTIONALITYDESCRIPTION", 0, "boolean", 4, 0);
   this.setVCMap("AV42IsAuthorized_SecParentFunctionalityDescription", "vISAUTHORIZED_SECPARENTFUNCTIONALITYDESCRIPTION", 0, "boolean", 4, 0);
   this.setVCMap("AV67TFSecFunctionalityType_SelsJson", "vTFSECFUNCTIONALITYTYPE_SELSJSON", 0, "vchar", 2097152, 0);
   this.setVCMap("AV8SecRoleId", "vSECROLEID", 0, "int", 4, 0);
   this.setVCMap("AV60ManageFiltersExecutionStep", "vMANAGEFILTERSEXECUTIONSTEP", 0, "int", 1, 0);
   this.setVCMap("AV26DynamicFiltersEnabled2", "vDYNAMICFILTERSENABLED2", 0, "boolean", 4, 0);
   this.setVCMap("AV31DynamicFiltersEnabled3", "vDYNAMICFILTERSENABLED3", 0, "boolean", 4, 0);
   this.setVCMap("AV76Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV20OrderedBy", "vORDEREDBY", 0, "int", 4, 0);
   this.setVCMap("AV21OrderedDsc", "vORDEREDDSC", 0, "boolean", 4, 0);
   this.setVCMap("AV44TFSecFunctionalityKey", "vTFSECFUNCTIONALITYKEY", 0, "svchar", 100, 0);
   this.setVCMap("AV45TFSecFunctionalityKey_Sel", "vTFSECFUNCTIONALITYKEY_SEL", 0, "svchar", 100, 0);
   this.setVCMap("AV68TFSecFunctionalityType_Sels", "vTFSECFUNCTIONALITYTYPE_SELS", 0, "Collint", 0, 0);
   this.setVCMap("AV55TFSecParentFunctionalityDescription", "vTFSECPARENTFUNCTIONALITYDESCRIPTION", 0, "svchar", 100, 0);
   this.setVCMap("AV56TFSecParentFunctionalityDescription_Sel", "vTFSECPARENTFUNCTIONALITYDESCRIPTION_SEL", 0, "svchar", 100, 0);
   this.setVCMap("AV17GridState", "vGRIDSTATE", 0, "WWPBaseObjects\WWPGridState", 0, 0);
   this.setVCMap("AV37DynamicFiltersIgnoreFirst", "vDYNAMICFILTERSIGNOREFIRST", 0, "boolean", 4, 0);
   this.setVCMap("AV36DynamicFiltersRemoving", "vDYNAMICFILTERSREMOVING", 0, "boolean", 4, 0);
   this.setVCMap("AV73IsAuthorized_Display", "vISAUTHORIZED_DISPLAY", 0, "boolean", 4, 0);
   this.setVCMap("AV41IsAuthorized_Update", "vISAUTHORIZED_UPDATE", 0, "boolean", 4, 0);
   this.setVCMap("AV40IsAuthorized_Delete", "vISAUTHORIZED_DELETE", 0, "boolean", 4, 0);
   this.setVCMap("AV16IsAuthorized_SecFunctionalityDescription", "vISAUTHORIZED_SECFUNCTIONALITYDESCRIPTION", 0, "boolean", 4, 0);
   this.setVCMap("AV42IsAuthorized_SecParentFunctionalityDescription", "vISAUTHORIZED_SECPARENTFUNCTIONALITYDESCRIPTION", 0, "boolean", 4, 0);
   this.setVCMap("AV8SecRoleId", "vSECROLEID", 0, "int", 4, 0);
   this.setVCMap("AV60ManageFiltersExecutionStep", "vMANAGEFILTERSEXECUTIONSTEP", 0, "int", 1, 0);
   this.setVCMap("AV26DynamicFiltersEnabled2", "vDYNAMICFILTERSENABLED2", 0, "boolean", 4, 0);
   this.setVCMap("AV31DynamicFiltersEnabled3", "vDYNAMICFILTERSENABLED3", 0, "boolean", 4, 0);
   this.setVCMap("AV76Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV20OrderedBy", "vORDEREDBY", 0, "int", 4, 0);
   this.setVCMap("AV21OrderedDsc", "vORDEREDDSC", 0, "boolean", 4, 0);
   this.setVCMap("AV44TFSecFunctionalityKey", "vTFSECFUNCTIONALITYKEY", 0, "svchar", 100, 0);
   this.setVCMap("AV45TFSecFunctionalityKey_Sel", "vTFSECFUNCTIONALITYKEY_SEL", 0, "svchar", 100, 0);
   this.setVCMap("AV68TFSecFunctionalityType_Sels", "vTFSECFUNCTIONALITYTYPE_SELS", 0, "Collint", 0, 0);
   this.setVCMap("AV55TFSecParentFunctionalityDescription", "vTFSECPARENTFUNCTIONALITYDESCRIPTION", 0, "svchar", 100, 0);
   this.setVCMap("AV56TFSecParentFunctionalityDescription_Sel", "vTFSECPARENTFUNCTIONALITYDESCRIPTION_SEL", 0, "svchar", 100, 0);
   this.setVCMap("AV17GridState", "vGRIDSTATE", 0, "WWPBaseObjects\WWPGridState", 0, 0);
   this.setVCMap("AV37DynamicFiltersIgnoreFirst", "vDYNAMICFILTERSIGNOREFIRST", 0, "boolean", 4, 0);
   this.setVCMap("AV36DynamicFiltersRemoving", "vDYNAMICFILTERSREMOVING", 0, "boolean", 4, 0);
   this.setVCMap("AV73IsAuthorized_Display", "vISAUTHORIZED_DISPLAY", 0, "boolean", 4, 0);
   this.setVCMap("AV41IsAuthorized_Update", "vISAUTHORIZED_UPDATE", 0, "boolean", 4, 0);
   this.setVCMap("AV40IsAuthorized_Delete", "vISAUTHORIZED_DELETE", 0, "boolean", 4, 0);
   this.setVCMap("AV16IsAuthorized_SecFunctionalityDescription", "vISAUTHORIZED_SECFUNCTIONALITYDESCRIPTION", 0, "boolean", 4, 0);
   this.setVCMap("AV42IsAuthorized_SecParentFunctionalityDescription", "vISAUTHORIZED_SECPARENTFUNCTIONALITYDESCRIPTION", 0, "boolean", 4, 0);
   GridContainer.addRefreshingVar(this.GXValidFnc[25]);
   GridContainer.addRefreshingVar(this.GXValidFnc[34]);
   GridContainer.addRefreshingVar(this.GXValidFnc[42]);
   GridContainer.addRefreshingVar(this.GXValidFnc[45]);
   GridContainer.addRefreshingVar(this.GXValidFnc[48]);
   GridContainer.addRefreshingVar(this.GXValidFnc[61]);
   GridContainer.addRefreshingVar(this.GXValidFnc[69]);
   GridContainer.addRefreshingVar(this.GXValidFnc[72]);
   GridContainer.addRefreshingVar(this.GXValidFnc[75]);
   GridContainer.addRefreshingVar(this.GXValidFnc[88]);
   GridContainer.addRefreshingVar(this.GXValidFnc[96]);
   GridContainer.addRefreshingVar(this.GXValidFnc[99]);
   GridContainer.addRefreshingVar(this.GXValidFnc[102]);
   GridContainer.addRefreshingVar({rfrVar:"AV8SecRoleId"});
   GridContainer.addRefreshingVar({rfrVar:"AV60ManageFiltersExecutionStep"});
   GridContainer.addRefreshingVar({rfrVar:"AV26DynamicFiltersEnabled2"});
   GridContainer.addRefreshingVar({rfrVar:"AV31DynamicFiltersEnabled3"});
   GridContainer.addRefreshingVar({rfrVar:"AV76Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"AV20OrderedBy"});
   GridContainer.addRefreshingVar({rfrVar:"AV21OrderedDsc"});
   GridContainer.addRefreshingVar({rfrVar:"AV44TFSecFunctionalityKey"});
   GridContainer.addRefreshingVar({rfrVar:"AV45TFSecFunctionalityKey_Sel"});
   GridContainer.addRefreshingVar({rfrVar:"AV68TFSecFunctionalityType_Sels"});
   GridContainer.addRefreshingVar({rfrVar:"AV55TFSecParentFunctionalityDescription"});
   GridContainer.addRefreshingVar({rfrVar:"AV56TFSecParentFunctionalityDescription_Sel"});
   GridContainer.addRefreshingVar({rfrVar:"AV17GridState"});
   GridContainer.addRefreshingVar({rfrVar:"AV37DynamicFiltersIgnoreFirst"});
   GridContainer.addRefreshingVar({rfrVar:"AV36DynamicFiltersRemoving"});
   GridContainer.addRefreshingVar({rfrVar:"AV73IsAuthorized_Display"});
   GridContainer.addRefreshingVar({rfrVar:"AV41IsAuthorized_Update"});
   GridContainer.addRefreshingVar({rfrVar:"AV40IsAuthorized_Delete"});
   GridContainer.addRefreshingVar({rfrVar:"AV16IsAuthorized_SecFunctionalityDescription"});
   GridContainer.addRefreshingVar({rfrVar:"AV42IsAuthorized_SecParentFunctionalityDescription"});
   GridContainer.addRefreshingVar(this.GXValidFnc[130]);
   GridContainer.addRefreshingParm(this.GXValidFnc[25]);
   GridContainer.addRefreshingParm(this.GXValidFnc[34]);
   GridContainer.addRefreshingParm(this.GXValidFnc[42]);
   GridContainer.addRefreshingParm(this.GXValidFnc[45]);
   GridContainer.addRefreshingParm(this.GXValidFnc[48]);
   GridContainer.addRefreshingParm(this.GXValidFnc[61]);
   GridContainer.addRefreshingParm(this.GXValidFnc[69]);
   GridContainer.addRefreshingParm(this.GXValidFnc[72]);
   GridContainer.addRefreshingParm(this.GXValidFnc[75]);
   GridContainer.addRefreshingParm(this.GXValidFnc[88]);
   GridContainer.addRefreshingParm(this.GXValidFnc[96]);
   GridContainer.addRefreshingParm(this.GXValidFnc[99]);
   GridContainer.addRefreshingParm(this.GXValidFnc[102]);
   GridContainer.addRefreshingParm({rfrVar:"AV8SecRoleId"});
   GridContainer.addRefreshingParm({rfrVar:"AV60ManageFiltersExecutionStep"});
   GridContainer.addRefreshingParm({rfrVar:"AV26DynamicFiltersEnabled2"});
   GridContainer.addRefreshingParm({rfrVar:"AV31DynamicFiltersEnabled3"});
   GridContainer.addRefreshingParm({rfrVar:"AV76Pgmname"});
   GridContainer.addRefreshingParm({rfrVar:"AV20OrderedBy"});
   GridContainer.addRefreshingParm({rfrVar:"AV21OrderedDsc"});
   GridContainer.addRefreshingParm({rfrVar:"AV44TFSecFunctionalityKey"});
   GridContainer.addRefreshingParm({rfrVar:"AV45TFSecFunctionalityKey_Sel"});
   GridContainer.addRefreshingParm({rfrVar:"AV68TFSecFunctionalityType_Sels"});
   GridContainer.addRefreshingParm({rfrVar:"AV55TFSecParentFunctionalityDescription"});
   GridContainer.addRefreshingParm({rfrVar:"AV56TFSecParentFunctionalityDescription_Sel"});
   GridContainer.addRefreshingParm({rfrVar:"AV17GridState"});
   GridContainer.addRefreshingParm({rfrVar:"AV37DynamicFiltersIgnoreFirst"});
   GridContainer.addRefreshingParm({rfrVar:"AV36DynamicFiltersRemoving"});
   GridContainer.addRefreshingParm({rfrVar:"AV73IsAuthorized_Display"});
   GridContainer.addRefreshingParm({rfrVar:"AV41IsAuthorized_Update"});
   GridContainer.addRefreshingParm({rfrVar:"AV40IsAuthorized_Delete"});
   GridContainer.addRefreshingParm({rfrVar:"AV16IsAuthorized_SecFunctionalityDescription"});
   GridContainer.addRefreshingParm({rfrVar:"AV42IsAuthorized_SecParentFunctionalityDescription"});
   GridContainer.addRefreshingParm(this.GXValidFnc[130]);
   this.Initialize( );
});
