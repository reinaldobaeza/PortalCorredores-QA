/*!   GeneXus C# 16_0_10-142546 on 4/19/2021 23:59:55.87
*/
gx.evt.autoSkip = false;
gx.define('wwpbaseobjects.secusersecuserwc', true, function (CmpContext) {
   this.ServerClass =  "wwpbaseobjects.secusersecuserwc" ;
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
      this.AV31ManageFiltersExecutionStep=gx.fn.getIntegerValue("vMANAGEFILTERSEXECUTIONSTEP",'.') ;
      this.AV58Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV15OrderedBy=gx.fn.getIntegerValue("vORDEREDBY",'.') ;
      this.AV16OrderedDsc=gx.fn.getControlValue("vORDEREDDSC") ;
      this.AV12GridState=gx.fn.getControlValue("vGRIDSTATE") ;
      this.AV29DynamicFiltersIgnoreFirst=gx.fn.getControlValue("vDYNAMICFILTERSIGNOREFIRST") ;
      this.AV28DynamicFiltersRemoving=gx.fn.getControlValue("vDYNAMICFILTERSREMOVING") ;
      this.AV20DynamicFiltersEnabled2=gx.fn.getControlValue("vDYNAMICFILTERSENABLED2") ;
      this.AV24DynamicFiltersEnabled3=gx.fn.getControlValue("vDYNAMICFILTERSENABLED3") ;
      this.AV52IsAuthorized_Update=gx.fn.getControlValue("vISAUTHORIZED_UPDATE") ;
      this.AV54IsAuthorized_Delete=gx.fn.getControlValue("vISAUTHORIZED_DELETE") ;
      this.AV8SecUserPadre=gx.fn.getIntegerValue("vSECUSERPADRE",'.') ;
      this.AV8SecUserPadre=gx.fn.getIntegerValue("vSECUSERPADRE",'.') ;
      this.AV31ManageFiltersExecutionStep=gx.fn.getIntegerValue("vMANAGEFILTERSEXECUTIONSTEP",'.') ;
      this.AV58Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV15OrderedBy=gx.fn.getIntegerValue("vORDEREDBY",'.') ;
      this.AV16OrderedDsc=gx.fn.getControlValue("vORDEREDDSC") ;
      this.AV12GridState=gx.fn.getControlValue("vGRIDSTATE") ;
      this.AV29DynamicFiltersIgnoreFirst=gx.fn.getControlValue("vDYNAMICFILTERSIGNOREFIRST") ;
      this.AV28DynamicFiltersRemoving=gx.fn.getControlValue("vDYNAMICFILTERSREMOVING") ;
      this.AV20DynamicFiltersEnabled2=gx.fn.getControlValue("vDYNAMICFILTERSENABLED2") ;
      this.AV24DynamicFiltersEnabled3=gx.fn.getControlValue("vDYNAMICFILTERSENABLED3") ;
      this.AV52IsAuthorized_Update=gx.fn.getControlValue("vISAUTHORIZED_UPDATE") ;
      this.AV54IsAuthorized_Delete=gx.fn.getControlValue("vISAUTHORIZED_DELETE") ;
   };
   this.s122_client=function()
   {
      gx.fn.setCtrlProperty("vSECUSERNAME1","Visible", false );
      gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR1","Visible", false );
      if ( this.AV17DynamicFiltersSelector1 == "SECUSERNAME" )
      {
         gx.fn.setCtrlProperty("vSECUSERNAME1","Visible", true );
         gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR1","Visible", true );
      }
   };
   this.s132_client=function()
   {
      gx.fn.setCtrlProperty("vSECUSERNAME2","Visible", false );
      gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR2","Visible", false );
      if ( this.AV21DynamicFiltersSelector2 == "SECUSERNAME" )
      {
         gx.fn.setCtrlProperty("vSECUSERNAME2","Visible", true );
         gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR2","Visible", true );
      }
   };
   this.s142_client=function()
   {
      gx.fn.setCtrlProperty("vSECUSERNAME3","Visible", false );
      gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR3","Visible", false );
      if ( this.AV25DynamicFiltersSelector3 == "SECUSERNAME" )
      {
         gx.fn.setCtrlProperty("vSECUSERNAME3","Visible", true );
         gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR3","Visible", true );
      }
   };
   this.s172_client=function()
   {
      this.DDO_GRIDContainer.SortedStatus =  gx.text.trim( gx.num.str( this.AV15OrderedBy, 4, 0))+":"+(this.AV16OrderedDsc ? "DSC" : "ASC")  ;
   };
   this.s202_client=function()
   {
      if ( ! this.AV29DynamicFiltersIgnoreFirst )
      {
         this.AV14GridStateDynamicFilter =  {Selected:"",Value:"",Operator:0,ValueTo:""}  ;
         this.AV14GridStateDynamicFilter.Selected =  this.AV17DynamicFiltersSelector1  ;
         if ( ( this.AV17DynamicFiltersSelector1 == "SECUSERNAME" ) && ! ((''==this.AV19SecUserName1)) )
         {
            this.AV14GridStateDynamicFilter.Value =  this.AV19SecUserName1  ;
            this.AV14GridStateDynamicFilter.Operator = gx.num.trunc( this.AV18DynamicFiltersOperator1 ,0) ;
         }
         if ( this.AV28DynamicFiltersRemoving || ! ((''==this.AV14GridStateDynamicFilter.Value)) )
         {
            this.AV12GridState.DynamicFilters.push(this.AV14GridStateDynamicFilter) ;
         }
      }
      if ( this.AV20DynamicFiltersEnabled2 )
      {
         this.AV14GridStateDynamicFilter =  {Selected:"",Value:"",Operator:0,ValueTo:""}  ;
         this.AV14GridStateDynamicFilter.Selected =  this.AV21DynamicFiltersSelector2  ;
         if ( ( this.AV21DynamicFiltersSelector2 == "SECUSERNAME" ) && ! ((''==this.AV23SecUserName2)) )
         {
            this.AV14GridStateDynamicFilter.Value =  this.AV23SecUserName2  ;
            this.AV14GridStateDynamicFilter.Operator = gx.num.trunc( this.AV22DynamicFiltersOperator2 ,0) ;
         }
         if ( this.AV28DynamicFiltersRemoving || ! ((''==this.AV14GridStateDynamicFilter.Value)) )
         {
            this.AV12GridState.DynamicFilters.push(this.AV14GridStateDynamicFilter) ;
         }
      }
      if ( this.AV24DynamicFiltersEnabled3 )
      {
         this.AV14GridStateDynamicFilter =  {Selected:"",Value:"",Operator:0,ValueTo:""}  ;
         this.AV14GridStateDynamicFilter.Selected =  this.AV25DynamicFiltersSelector3  ;
         if ( ( this.AV25DynamicFiltersSelector3 == "SECUSERNAME" ) && ! ((''==this.AV27SecUserName3)) )
         {
            this.AV14GridStateDynamicFilter.Value =  this.AV27SecUserName3  ;
            this.AV14GridStateDynamicFilter.Operator = gx.num.trunc( this.AV26DynamicFiltersOperator3 ,0) ;
         }
         if ( this.AV28DynamicFiltersRemoving || ! ((''==this.AV14GridStateDynamicFilter.Value)) )
         {
            this.AV12GridState.DynamicFilters.push(this.AV14GridStateDynamicFilter) ;
         }
      }
   };
   this.s212_client=function()
   {
      this.AV20DynamicFiltersEnabled2 =  false  ;
      this.AV21DynamicFiltersSelector2 =  "SECUSERNAME"  ;
      this.AV22DynamicFiltersOperator2 = gx.num.trunc( 0 ,0) ;
      this.AV23SecUserName2 =  ''  ;
      this.s132_client();
      this.AV24DynamicFiltersEnabled3 =  false  ;
      this.AV25DynamicFiltersSelector3 =  "SECUSERNAME"  ;
      this.AV26DynamicFiltersOperator3 = gx.num.trunc( 0 ,0) ;
      this.AV27SecUserName3 =  ''  ;
      this.s142_client();
   };
   this.e123c2_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE", false, null, true, true);
   };
   this.e133c2_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", false, null, true, true);
   };
   this.e143c2_client=function()
   {
      return this.executeServerEvent("DDO_GRID.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e153c2_client=function()
   {
      return this.executeServerEvent("'REMOVEDYNAMICFILTERS1'", true, null, false, false);
   };
   this.e163c2_client=function()
   {
      return this.executeServerEvent("'REMOVEDYNAMICFILTERS2'", true, null, false, false);
   };
   this.e173c2_client=function()
   {
      return this.executeServerEvent("'REMOVEDYNAMICFILTERS3'", true, null, false, false);
   };
   this.e113c2_client=function()
   {
      return this.executeServerEvent("DDO_MANAGEFILTERS.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e183c2_client=function()
   {
      return this.executeServerEvent("'DOINSERT'", false, null, false, false);
   };
   this.e193c2_client=function()
   {
      return this.executeServerEvent("'ADDDYNAMICFILTERS1'", true, null, false, false);
   };
   this.e203c2_client=function()
   {
      return this.executeServerEvent("VDYNAMICFILTERSSELECTOR1.CLICK", true, null, false, true);
   };
   this.e213c2_client=function()
   {
      return this.executeServerEvent("'ADDDYNAMICFILTERS2'", true, null, false, false);
   };
   this.e223c2_client=function()
   {
      return this.executeServerEvent("VDYNAMICFILTERSSELECTOR2.CLICK", true, null, false, true);
   };
   this.e233c2_client=function()
   {
      return this.executeServerEvent("VDYNAMICFILTERSSELECTOR3.CLICK", true, null, false, true);
   };
   this.e273c2_client=function()
   {
      return this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e283c2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,19,20,21,22,27,30,33,35,36,38,40,43,44,46,47,49,52,54,57,59,60,62,64,67,68,70,71,73,76,78,81,83,84,86,88,91,92,94,95,97,100,101,102,103,104,105,107,108,109,110,111,112,113,114,115,116,117,118,119,120,122,123,124,125,127];
   this.GXLastCtrlId =127;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",106,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"wwpbaseobjects.secusersecuserwc",[],false,1,false,true,0,false,false,false,"",0,"px",0,"px","Nueva fila",true,false,false,null,null,false,"",false,[1,1,1,1],false,0,true,false);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Display",107,"vDISPLAY","","Visualizar","Display","char",0,"px",20,20,"left",null,[],"Display","Display",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit("Update",108,"vUPDATE","","Modificar","Update","char",0,"px",20,20,"left",null,[],"Update","Update",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit("Delete",109,"vDELETE","","Eliminar","Delete","char",0,"px",20,20,"left",null,[],"Delete","Delete",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit(141,110,"SECUSERID","Id","","SecUserId","int",0,"px",4,4,"right",null,[],141,"SecUserId",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(149,111,"SECUSERNAME","Name","","SecUserName","svchar",0,"px",100,80,"left",null,[],149,"SecUserName",true,0,false,false,"Attribute",1,"WWColumn");
   GridContainer.addSingleLineEdit(150,112,"SECUSERPASSWORD","Password","","SecUserPassword","svchar",0,"px",100,80,"left",null,[],150,"SecUserPassword",true,0,false,true,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(151,113,"SECUSERDESCRIPCION","Descripción","","SecUserDescripcion","svchar",0,"px",100,80,"left",null,[],151,"SecUserDescripcion",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addCheckBox(166,114,"SECUSERCARGAPOLIZAS","Carga Pólizas","","SecUserCargaPolizas","boolean","true","false",null,true,false,0,"px","WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(216,115,"SECUSERMAIL","User Mail","","SecUserMail","svchar",0,"px",100,80,"left",null,[],216,"SecUserMail",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(217,116,"SECUSERKEY","User Key","","SecUserKey","svchar",0,"px",400,80,"left",null,[],217,"SecUserKey",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(218,117,"SECUSERTOKEN","User Token","","SecUserToken","svchar",0,"px",400,80,"left",null,[],218,"SecUserToken",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(219,118,"SECUSERTOKENFECHA","Token Fecha","","SecUserTokenFecha","dtime",0,"px",24,23,"right",null,[],219,"SecUserTokenFecha",true,12,false,false,"Attribute",1,"WWColumn hidden-xs");
   this.GridContainer.emptyText = "";
   this.setGrid(GridContainer);
   this.GRIDPAGINATIONBARContainer = gx.uc.getNew(this, 121, 36, "DVelop_DVPaginationBar", this.CmpContext + "GRIDPAGINATIONBARContainer", "Gridpaginationbar", "GRIDPAGINATIONBAR");
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
   GRIDPAGINATIONBARContainer.addV2CFunction('AV48GridCurrentPage', "vGRIDCURRENTPAGE", 'SetCurrentPage');
   GRIDPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV48GridCurrentPage=UC.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",UC.ParentObject.AV48GridCurrentPage); });
   GRIDPAGINATIONBARContainer.addV2CFunction('AV49GridPageCount', "vGRIDPAGECOUNT", 'SetPageCount');
   GRIDPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV49GridPageCount=UC.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",UC.ParentObject.AV49GridPageCount); });
   GRIDPAGINATIONBARContainer.setProp("RecordCount", "Recordcount", '', "str");
   GRIDPAGINATIONBARContainer.setProp("Page", "Page", '', "str");
   GRIDPAGINATIONBARContainer.setProp("Visible", "Visible", true, "bool");
   GRIDPAGINATIONBARContainer.setProp("Gx Control Type", "Gxcontroltype", '', "int");
   GRIDPAGINATIONBARContainer.setC2ShowFunction(function(UC) { UC.show(); });
   GRIDPAGINATIONBARContainer.addEventHandler("ChangePage", this.e123c2_client);
   GRIDPAGINATIONBARContainer.addEventHandler("ChangeRowsPerPage", this.e133c2_client);
   this.setUserControl(GRIDPAGINATIONBARContainer);
   this.DDO_GRIDContainer = gx.uc.getNew(this, 126, 36, "DDOGridTitleSettingsM", this.CmpContext + "DDO_GRIDContainer", "Ddo_grid", "DDO_GRID");
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
   DDO_GRIDContainer.setProp("ColumnIds", "Columnids", "3:SecUserId|4:SecUserName|5:SecUserPassword|6:SecUserDescripcion|7:SecUserCargaPolizas|8:SecUserMail|9:SecUserKey|10:SecUserToken|11:SecUserTokenFecha", "str");
   DDO_GRIDContainer.setProp("ColumnsSortValues", "Columnssortvalues", "2|1|3|4|5|6|7|8|9", "str");
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
   DDO_GRIDContainer.addV2CFunction('AV45DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_GRIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV45DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV45DDO_TitleSettingsIcons); });
   DDO_GRIDContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_GRIDContainer.addEventHandler("OnOptionClicked", this.e143c2_client);
   this.setUserControl(DDO_GRIDContainer);
   this.DDO_MANAGEFILTERSContainer = gx.uc.getNew(this, 25, 0, "BootstrapDropDownOptions", this.CmpContext + "DDO_MANAGEFILTERSContainer", "Ddo_managefilters", "DDO_MANAGEFILTERS");
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
   DDO_MANAGEFILTERSContainer.addV2CFunction('AV35ManageFiltersData', "vMANAGEFILTERSDATA", 'SetDropDownOptionsData');
   DDO_MANAGEFILTERSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV35ManageFiltersData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vMANAGEFILTERSDATA",UC.ParentObject.AV35ManageFiltersData); });
   DDO_MANAGEFILTERSContainer.setProp("Gx Control Type", "Gxcontroltype", '', "int");
   DDO_MANAGEFILTERSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_MANAGEFILTERSContainer.addEventHandler("OnOptionClicked", this.e113c2_client);
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
   GXValidFnc[15]={ id: 15, fld:"TABLEACTIONS",grid:0};
   GXValidFnc[16]={ id: 16, fld:"",grid:0};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"",grid:0};
   GXValidFnc[19]={ id: 19, fld:"",grid:0};
   GXValidFnc[20]={ id: 20, fld:"BTNINSERT",grid:0,evt:"e183c2_client"};
   GXValidFnc[21]={ id: 21, fld:"",grid:0};
   GXValidFnc[22]={ id: 22, fld:"TABLERIGHTHEADER",grid:0};
   GXValidFnc[27]={ id: 27, fld:"TABLEFILTERS",grid:0};
   GXValidFnc[30]={ id: 30, fld:"TABLEDYNAMICFILTERS",grid:0};
   GXValidFnc[33]={ id: 33, fld:"DYNAMICFILTERSPREFIX1", format:0,grid:0};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id:36 ,lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vDYNAMICFILTERSSELECTOR1",gxz:"ZV17DynamicFiltersSelector1",gxold:"OV17DynamicFiltersSelector1",gxvar:"AV17DynamicFiltersSelector1",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV17DynamicFiltersSelector1=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV17DynamicFiltersSelector1=Value},v2c:function(){gx.fn.setComboBoxValue("vDYNAMICFILTERSSELECTOR1",gx.O.AV17DynamicFiltersSelector1)},c2v:function(){if(this.val()!==undefined)gx.O.AV17DynamicFiltersSelector1=this.val()},val:function(){return gx.fn.getControlValue("vDYNAMICFILTERSSELECTOR1")},nac:gx.falseFn,evt:"e203c2_client"};
   GXValidFnc[38]={ id: 38, fld:"DYNAMICFILTERSMIDDLE1", format:0,grid:0};
   GXValidFnc[40]={ id: 40, fld:"TABLEMERGEDDYNAMICFILTERS1",grid:0};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id:44 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vDYNAMICFILTERSOPERATOR1",gxz:"ZV18DynamicFiltersOperator1",gxold:"OV18DynamicFiltersOperator1",gxvar:"AV18DynamicFiltersOperator1",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV18DynamicFiltersOperator1=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV18DynamicFiltersOperator1=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vDYNAMICFILTERSOPERATOR1",gx.O.AV18DynamicFiltersOperator1)},c2v:function(){if(this.val()!==undefined)gx.O.AV18DynamicFiltersOperator1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDYNAMICFILTERSOPERATOR1",'.')},nac:gx.falseFn};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id:47 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vSECUSERNAME1",gxz:"ZV19SecUserName1",gxold:"OV19SecUserName1",gxvar:"AV19SecUserName1",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV19SecUserName1=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV19SecUserName1=Value},v2c:function(){gx.fn.setControlValue("vSECUSERNAME1",gx.O.AV19SecUserName1,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV19SecUserName1=this.val()},val:function(){return gx.fn.getControlValue("vSECUSERNAME1")},nac:gx.falseFn};
   GXValidFnc[49]={ id: 49, fld:"UNNAMEDTABLEDYNAMICFILTERS_1",grid:0};
   GXValidFnc[52]={ id: 52, fld:"ADDDYNAMICFILTERS1",grid:0,evt:"e193c2_client"};
   GXValidFnc[54]={ id: 54, fld:"REMOVEDYNAMICFILTERS1",grid:0,evt:"e153c2_client"};
   GXValidFnc[57]={ id: 57, fld:"DYNAMICFILTERSPREFIX2", format:0,grid:0};
   GXValidFnc[59]={ id: 59, fld:"",grid:0};
   GXValidFnc[60]={ id:60 ,lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vDYNAMICFILTERSSELECTOR2",gxz:"ZV21DynamicFiltersSelector2",gxold:"OV21DynamicFiltersSelector2",gxvar:"AV21DynamicFiltersSelector2",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV21DynamicFiltersSelector2=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV21DynamicFiltersSelector2=Value},v2c:function(){gx.fn.setComboBoxValue("vDYNAMICFILTERSSELECTOR2",gx.O.AV21DynamicFiltersSelector2)},c2v:function(){if(this.val()!==undefined)gx.O.AV21DynamicFiltersSelector2=this.val()},val:function(){return gx.fn.getControlValue("vDYNAMICFILTERSSELECTOR2")},nac:gx.falseFn,evt:"e223c2_client"};
   GXValidFnc[62]={ id: 62, fld:"DYNAMICFILTERSMIDDLE2", format:0,grid:0};
   GXValidFnc[64]={ id: 64, fld:"TABLEMERGEDDYNAMICFILTERS2",grid:0};
   GXValidFnc[67]={ id: 67, fld:"",grid:0};
   GXValidFnc[68]={ id:68 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vDYNAMICFILTERSOPERATOR2",gxz:"ZV22DynamicFiltersOperator2",gxold:"OV22DynamicFiltersOperator2",gxvar:"AV22DynamicFiltersOperator2",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV22DynamicFiltersOperator2=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV22DynamicFiltersOperator2=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vDYNAMICFILTERSOPERATOR2",gx.O.AV22DynamicFiltersOperator2)},c2v:function(){if(this.val()!==undefined)gx.O.AV22DynamicFiltersOperator2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDYNAMICFILTERSOPERATOR2",'.')},nac:gx.falseFn};
   GXValidFnc[70]={ id: 70, fld:"",grid:0};
   GXValidFnc[71]={ id:71 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vSECUSERNAME2",gxz:"ZV23SecUserName2",gxold:"OV23SecUserName2",gxvar:"AV23SecUserName2",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV23SecUserName2=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV23SecUserName2=Value},v2c:function(){gx.fn.setControlValue("vSECUSERNAME2",gx.O.AV23SecUserName2,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV23SecUserName2=this.val()},val:function(){return gx.fn.getControlValue("vSECUSERNAME2")},nac:gx.falseFn};
   GXValidFnc[73]={ id: 73, fld:"UNNAMEDTABLEDYNAMICFILTERS_2",grid:0};
   GXValidFnc[76]={ id: 76, fld:"ADDDYNAMICFILTERS2",grid:0,evt:"e213c2_client"};
   GXValidFnc[78]={ id: 78, fld:"REMOVEDYNAMICFILTERS2",grid:0,evt:"e163c2_client"};
   GXValidFnc[81]={ id: 81, fld:"DYNAMICFILTERSPREFIX3", format:0,grid:0};
   GXValidFnc[83]={ id: 83, fld:"",grid:0};
   GXValidFnc[84]={ id:84 ,lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vDYNAMICFILTERSSELECTOR3",gxz:"ZV25DynamicFiltersSelector3",gxold:"OV25DynamicFiltersSelector3",gxvar:"AV25DynamicFiltersSelector3",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV25DynamicFiltersSelector3=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV25DynamicFiltersSelector3=Value},v2c:function(){gx.fn.setComboBoxValue("vDYNAMICFILTERSSELECTOR3",gx.O.AV25DynamicFiltersSelector3)},c2v:function(){if(this.val()!==undefined)gx.O.AV25DynamicFiltersSelector3=this.val()},val:function(){return gx.fn.getControlValue("vDYNAMICFILTERSSELECTOR3")},nac:gx.falseFn,evt:"e233c2_client"};
   GXValidFnc[86]={ id: 86, fld:"DYNAMICFILTERSMIDDLE3", format:0,grid:0};
   GXValidFnc[88]={ id: 88, fld:"TABLEMERGEDDYNAMICFILTERS3",grid:0};
   GXValidFnc[91]={ id: 91, fld:"",grid:0};
   GXValidFnc[92]={ id:92 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vDYNAMICFILTERSOPERATOR3",gxz:"ZV26DynamicFiltersOperator3",gxold:"OV26DynamicFiltersOperator3",gxvar:"AV26DynamicFiltersOperator3",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV26DynamicFiltersOperator3=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV26DynamicFiltersOperator3=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vDYNAMICFILTERSOPERATOR3",gx.O.AV26DynamicFiltersOperator3)},c2v:function(){if(this.val()!==undefined)gx.O.AV26DynamicFiltersOperator3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDYNAMICFILTERSOPERATOR3",'.')},nac:gx.falseFn};
   GXValidFnc[94]={ id: 94, fld:"",grid:0};
   GXValidFnc[95]={ id:95 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vSECUSERNAME3",gxz:"ZV27SecUserName3",gxold:"OV27SecUserName3",gxvar:"AV27SecUserName3",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV27SecUserName3=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV27SecUserName3=Value},v2c:function(){gx.fn.setControlValue("vSECUSERNAME3",gx.O.AV27SecUserName3,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV27SecUserName3=this.val()},val:function(){return gx.fn.getControlValue("vSECUSERNAME3")},nac:gx.falseFn};
   GXValidFnc[97]={ id: 97, fld:"UNNAMEDTABLEDYNAMICFILTERS_3",grid:0};
   GXValidFnc[100]={ id: 100, fld:"REMOVEDYNAMICFILTERS3",grid:0,evt:"e173c2_client"};
   GXValidFnc[101]={ id: 101, fld:"",grid:0};
   GXValidFnc[102]={ id: 102, fld:"",grid:0};
   GXValidFnc[103]={ id: 103, fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};
   GXValidFnc[104]={ id: 104, fld:"",grid:0};
   GXValidFnc[105]={ id: 105, fld:"",grid:0};
   GXValidFnc[107]={ id:107 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:106,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDISPLAY",gxz:"ZV50Display",gxold:"OV50Display",gxvar:"AV50Display",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV50Display=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV50Display=Value},v2c:function(row){gx.fn.setGridControlValue("vDISPLAY",row || gx.fn.currentGridRowImpl(106),gx.O.AV50Display,1)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV50Display=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vDISPLAY",row || gx.fn.currentGridRowImpl(106))},nac:gx.falseFn};
   GXValidFnc[108]={ id:108 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:106,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE",gxz:"ZV51Update",gxold:"OV51Update",gxvar:"AV51Update",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV51Update=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV51Update=Value},v2c:function(row){gx.fn.setGridControlValue("vUPDATE",row || gx.fn.currentGridRowImpl(106),gx.O.AV51Update,1)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV51Update=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vUPDATE",row || gx.fn.currentGridRowImpl(106))},nac:gx.falseFn};
   GXValidFnc[109]={ id:109 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:106,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE",gxz:"ZV53Delete",gxold:"OV53Delete",gxvar:"AV53Delete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV53Delete=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV53Delete=Value},v2c:function(row){gx.fn.setGridControlValue("vDELETE",row || gx.fn.currentGridRowImpl(106),gx.O.AV53Delete,1)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV53Delete=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vDELETE",row || gx.fn.currentGridRowImpl(106))},nac:gx.falseFn};
   GXValidFnc[110]={ id:110 ,lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:106,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERID",gxz:"Z141SecUserId",gxold:"O141SecUserId",gxvar:"A141SecUserId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A141SecUserId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z141SecUserId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SECUSERID",row || gx.fn.currentGridRowImpl(106),gx.O.A141SecUserId,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A141SecUserId=gx.num.intval(this.val(row))},val:function(row){return gx.fn.getGridIntegerValue("SECUSERID",row || gx.fn.currentGridRowImpl(106),'.')},nac:gx.falseFn};
   GXValidFnc[111]={ id:111 ,lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:106,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERNAME",gxz:"Z149SecUserName",gxold:"O149SecUserName",gxvar:"A149SecUserName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A149SecUserName=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z149SecUserName=Value},v2c:function(row){gx.fn.setGridControlValue("SECUSERNAME",row || gx.fn.currentGridRowImpl(106),gx.O.A149SecUserName,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A149SecUserName=this.val(row)},val:function(row){return gx.fn.getGridControlValue("SECUSERNAME",row || gx.fn.currentGridRowImpl(106))},nac:gx.falseFn};
   GXValidFnc[112]={ id:112 ,lvl:2,type:"svchar",len:100,dec:0,sign:false,isPwd:true,ro:1,isacc:0,grid:106,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERPASSWORD",gxz:"Z150SecUserPassword",gxold:"O150SecUserPassword",gxvar:"A150SecUserPassword",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A150SecUserPassword=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z150SecUserPassword=Value},v2c:function(row){gx.fn.setGridControlValue("SECUSERPASSWORD",row || gx.fn.currentGridRowImpl(106),gx.O.A150SecUserPassword,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A150SecUserPassword=this.val(row)},val:function(row){return gx.fn.getGridControlValue("SECUSERPASSWORD",row || gx.fn.currentGridRowImpl(106))},nac:gx.falseFn};
   GXValidFnc[113]={ id:113 ,lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:106,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERDESCRIPCION",gxz:"Z151SecUserDescripcion",gxold:"O151SecUserDescripcion",gxvar:"A151SecUserDescripcion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A151SecUserDescripcion=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z151SecUserDescripcion=Value},v2c:function(row){gx.fn.setGridControlValue("SECUSERDESCRIPCION",row || gx.fn.currentGridRowImpl(106),gx.O.A151SecUserDescripcion,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.A151SecUserDescripcion=this.val(row)},val:function(row){return gx.fn.getGridControlValue("SECUSERDESCRIPCION",row || gx.fn.currentGridRowImpl(106))},nac:gx.falseFn};
   GXValidFnc[114]={ id:114 ,lvl:2,type:"boolean",len:4,dec:0,sign:false,ro:1,isacc:0,grid:106,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERCARGAPOLIZAS",gxz:"Z166SecUserCargaPolizas",gxold:"O166SecUserCargaPolizas",gxvar:"A166SecUserCargaPolizas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.A166SecUserCargaPolizas=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z166SecUserCargaPolizas=gx.lang.booleanValue(Value)},v2c:function(row){gx.fn.setGridCheckBoxValue("SECUSERCARGAPOLIZAS",row || gx.fn.currentGridRowImpl(106),gx.O.A166SecUserCargaPolizas,true)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A166SecUserCargaPolizas=gx.lang.booleanValue(this.val(row))},val:function(row){return gx.fn.getGridControlValue("SECUSERCARGAPOLIZAS",row || gx.fn.currentGridRowImpl(106))},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[115]={ id:115 ,lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:106,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERMAIL",gxz:"Z216SecUserMail",gxold:"O216SecUserMail",gxvar:"A216SecUserMail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'email',v2v:function(Value){if(Value!==undefined)gx.O.A216SecUserMail=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z216SecUserMail=Value},v2c:function(row){gx.fn.setGridControlValue("SECUSERMAIL",row || gx.fn.currentGridRowImpl(106),gx.O.A216SecUserMail,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.A216SecUserMail=this.val(row)},val:function(row){return gx.fn.getGridControlValue("SECUSERMAIL",row || gx.fn.currentGridRowImpl(106))},nac:gx.falseFn};
   GXValidFnc[116]={ id:116 ,lvl:2,type:"svchar",len:400,dec:0,sign:false,ro:1,isacc:0,grid:106,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERKEY",gxz:"Z217SecUserKey",gxold:"O217SecUserKey",gxvar:"A217SecUserKey",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A217SecUserKey=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z217SecUserKey=Value},v2c:function(row){gx.fn.setGridControlValue("SECUSERKEY",row || gx.fn.currentGridRowImpl(106),gx.O.A217SecUserKey,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A217SecUserKey=this.val(row)},val:function(row){return gx.fn.getGridControlValue("SECUSERKEY",row || gx.fn.currentGridRowImpl(106))},nac:gx.falseFn};
   GXValidFnc[117]={ id:117 ,lvl:2,type:"svchar",len:400,dec:0,sign:false,ro:1,isacc:0,grid:106,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERTOKEN",gxz:"Z218SecUserToken",gxold:"O218SecUserToken",gxvar:"A218SecUserToken",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A218SecUserToken=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z218SecUserToken=Value},v2c:function(row){gx.fn.setGridControlValue("SECUSERTOKEN",row || gx.fn.currentGridRowImpl(106),gx.O.A218SecUserToken,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A218SecUserToken=this.val(row)},val:function(row){return gx.fn.getGridControlValue("SECUSERTOKEN",row || gx.fn.currentGridRowImpl(106))},nac:gx.falseFn};
   GXValidFnc[118]={ id:118 ,lvl:2,type:"dtime",len:10,dec:12,sign:false,ro:1,isacc:0,grid:106,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERTOKENFECHA",gxz:"Z219SecUserTokenFecha",gxold:"O219SecUserTokenFecha",gxvar:"A219SecUserTokenFecha",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99:99.999",dec:12},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.A219SecUserTokenFecha=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z219SecUserTokenFecha=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("SECUSERTOKENFECHA",row || gx.fn.currentGridRowImpl(106),gx.O.A219SecUserTokenFecha,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A219SecUserTokenFecha=gx.fn.toDatetimeValue(this.val(row))},val:function(row){return gx.fn.getGridDateTimeValue("SECUSERTOKENFECHA",row || gx.fn.currentGridRowImpl(106))},nac:gx.falseFn};
   GXValidFnc[119]={ id: 119, fld:"",grid:0};
   GXValidFnc[120]={ id: 120, fld:"",grid:0};
   GXValidFnc[122]={ id: 122, fld:"",grid:0};
   GXValidFnc[123]={ id: 123, fld:"",grid:0};
   GXValidFnc[124]={ id: 124, fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};
   GXValidFnc[125]={ id: 125, fld:"JSDYNAMICFILTERS", format:1,grid:0};
   GXValidFnc[127]={ id:127 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERPADRE",gxz:"Z152SecUserPadre",gxold:"O152SecUserPadre",gxvar:"A152SecUserPadre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A152SecUserPadre=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z152SecUserPadre=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SECUSERPADRE",gx.O.A152SecUserPadre,0)},c2v:function(){if(this.val()!==undefined)gx.O.A152SecUserPadre=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SECUSERPADRE",'.')},nac:gx.falseFn};
   this.AV17DynamicFiltersSelector1 = "" ;
   this.ZV17DynamicFiltersSelector1 = "" ;
   this.OV17DynamicFiltersSelector1 = "" ;
   this.AV18DynamicFiltersOperator1 = 0 ;
   this.ZV18DynamicFiltersOperator1 = 0 ;
   this.OV18DynamicFiltersOperator1 = 0 ;
   this.AV19SecUserName1 = "" ;
   this.ZV19SecUserName1 = "" ;
   this.OV19SecUserName1 = "" ;
   this.AV21DynamicFiltersSelector2 = "" ;
   this.ZV21DynamicFiltersSelector2 = "" ;
   this.OV21DynamicFiltersSelector2 = "" ;
   this.AV22DynamicFiltersOperator2 = 0 ;
   this.ZV22DynamicFiltersOperator2 = 0 ;
   this.OV22DynamicFiltersOperator2 = 0 ;
   this.AV23SecUserName2 = "" ;
   this.ZV23SecUserName2 = "" ;
   this.OV23SecUserName2 = "" ;
   this.AV25DynamicFiltersSelector3 = "" ;
   this.ZV25DynamicFiltersSelector3 = "" ;
   this.OV25DynamicFiltersSelector3 = "" ;
   this.AV26DynamicFiltersOperator3 = 0 ;
   this.ZV26DynamicFiltersOperator3 = 0 ;
   this.OV26DynamicFiltersOperator3 = 0 ;
   this.AV27SecUserName3 = "" ;
   this.ZV27SecUserName3 = "" ;
   this.OV27SecUserName3 = "" ;
   this.ZV50Display = "" ;
   this.OV50Display = "" ;
   this.ZV51Update = "" ;
   this.OV51Update = "" ;
   this.ZV53Delete = "" ;
   this.OV53Delete = "" ;
   this.Z141SecUserId = 0 ;
   this.O141SecUserId = 0 ;
   this.Z149SecUserName = "" ;
   this.O149SecUserName = "" ;
   this.Z150SecUserPassword = "" ;
   this.O150SecUserPassword = "" ;
   this.Z151SecUserDescripcion = "" ;
   this.O151SecUserDescripcion = "" ;
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
   this.A152SecUserPadre = 0 ;
   this.Z152SecUserPadre = 0 ;
   this.O152SecUserPadre = 0 ;
   this.AV35ManageFiltersData = [ ] ;
   this.AV17DynamicFiltersSelector1 = "" ;
   this.AV18DynamicFiltersOperator1 = 0 ;
   this.AV19SecUserName1 = "" ;
   this.AV21DynamicFiltersSelector2 = "" ;
   this.AV22DynamicFiltersOperator2 = 0 ;
   this.AV23SecUserName2 = "" ;
   this.AV25DynamicFiltersSelector3 = "" ;
   this.AV26DynamicFiltersOperator3 = 0 ;
   this.AV27SecUserName3 = "" ;
   this.AV48GridCurrentPage = 0 ;
   this.AV45DDO_TitleSettingsIcons = {Default:"",Default_GXI:"",Filtered:"",Filtered_GXI:"",SortedASC:"",SortedASC_GXI:"",SortedDSC:"",SortedDSC_GXI:"",FilteredSortedASC:"",FilteredSortedASC_GXI:"",FilteredSortedDSC:"",FilteredSortedDSC_GXI:"",OptionSortASC:"",OptionSortASC_GXI:"",OptionSortDSC:"",OptionSortDSC_GXI:"",OptionApplyFilter:"",OptionApplyFilter_GXI:"",OptionFilteringData:"",OptionFilteringData_GXI:"",OptionCleanFilters:"",OptionCleanFilters_GXI:"",SelectedOption:"",SelectedOption_GXI:"",MultiselOption:"",MultiselOption_GXI:"",MultiselSelOption:"",MultiselSelOption_GXI:"",TreeviewCollapse:"",TreeviewCollapse_GXI:"",TreeviewExpand:"",TreeviewExpand_GXI:""} ;
   this.A152SecUserPadre = 0 ;
   this.AV8SecUserPadre = 0 ;
   this.AV50Display = "" ;
   this.AV51Update = "" ;
   this.AV53Delete = "" ;
   this.A141SecUserId = 0 ;
   this.A149SecUserName = "" ;
   this.A150SecUserPassword = "" ;
   this.A151SecUserDescripcion = "" ;
   this.A166SecUserCargaPolizas = false ;
   this.A216SecUserMail = "" ;
   this.A217SecUserKey = "" ;
   this.A218SecUserToken = "" ;
   this.A219SecUserTokenFecha = gx.date.nullDate() ;
   this.AV31ManageFiltersExecutionStep = 0 ;
   this.AV58Pgmname = "" ;
   this.AV15OrderedBy = 0 ;
   this.AV16OrderedDsc = false ;
   this.AV12GridState = {CurrentPage:0,OrderedBy:0,OrderedDsc:false,HidingSearch:0,PageSize:"",CollapsedRecords:"",GroupBy:"",FilterValues:[],DynamicFilters:[]} ;
   this.AV29DynamicFiltersIgnoreFirst = false ;
   this.AV28DynamicFiltersRemoving = false ;
   this.AV20DynamicFiltersEnabled2 = false ;
   this.AV24DynamicFiltersEnabled3 = false ;
   this.AV52IsAuthorized_Update = false ;
   this.AV54IsAuthorized_Delete = false ;
   this.AV14GridStateDynamicFilter = {Selected:"",Value:"",Operator:0,ValueTo:""} ;
   this.Events = {"e123c2_client": ["GRIDPAGINATIONBAR.CHANGEPAGE", true] ,"e133c2_client": ["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", true] ,"e143c2_client": ["DDO_GRID.ONOPTIONCLICKED", true] ,"e153c2_client": ["'REMOVEDYNAMICFILTERS1'", true] ,"e163c2_client": ["'REMOVEDYNAMICFILTERS2'", true] ,"e173c2_client": ["'REMOVEDYNAMICFILTERS3'", true] ,"e113c2_client": ["DDO_MANAGEFILTERS.ONOPTIONCLICKED", true] ,"e183c2_client": ["'DOINSERT'", true] ,"e193c2_client": ["'ADDDYNAMICFILTERS1'", true] ,"e203c2_client": ["VDYNAMICFILTERSSELECTOR1.CLICK", true] ,"e213c2_client": ["'ADDDYNAMICFILTERS2'", true] ,"e223c2_client": ["VDYNAMICFILTERSSELECTOR2.CLICK", true] ,"e233c2_client": ["VDYNAMICFILTERSSELECTOR3.CLICK", true] ,"e273c2_client": ["ENTER", true] ,"e283c2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV8SecUserPadre',fld:'vSECUSERPADRE',pic:'ZZZ9'},{av:'sPrefix'},{av:'AV31ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV17DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV18DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV19SecUserName1',fld:'vSECUSERNAME1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV21DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV22DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV23SecUserName2',fld:'vSECUSERNAME2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV25DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV26DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV27SecUserName3',fld:'vSECUSERNAME3',pic:''},{av:'AV58Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV15OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV16OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV12GridState',fld:'vGRIDSTATE',pic:''},{av:'AV29DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV28DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV20DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV24DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV52IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV54IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true}],[{av:'AV31ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV48GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV49GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV52IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:'vUPDATE',prop:'Visible'},{av:'AV54IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:'vDELETE',prop:'Visible'},{ctrl:'BTNINSERT',prop:'Visible'},{av:'AV35ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV12GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["START"] = [[{av:'AV15OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV17DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV21DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV25DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{av:'AV58Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV8SecUserPadre',fld:'vSECUSERPADRE',pic:'ZZZ9'},{av:'AV16OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV12GridState',fld:'vGRIDSTATE',pic:''},{av:'AV28DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''}],[{ctrl:'GRID',prop:'Rows'},{av:'gx.fn.getCtrlProperty("JSDYNAMICFILTERS","Caption")',ctrl:'JSDYNAMICFILTERS',prop:'Caption'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV17DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV21DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV25DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Jsonclick")',ctrl:'ADDDYNAMICFILTERS1',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Jsonclick")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Jsonclick")',ctrl:'ADDDYNAMICFILTERS2',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Jsonclick")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS3","Jsonclick")',ctrl:'REMOVEDYNAMICFILTERS3',prop:'Jsonclick'},{av:'this.DDO_GRIDContainer.GridInternalName',ctrl:'DDO_GRID',prop:'GridInternalName'},{av:'gx.fn.getCtrlProperty("SECUSERPADRE","Visible")',ctrl:'SECUSERPADRE',prop:'Visible'},{av:'AV15OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV45DDO_TitleSettingsIcons',fld:'vDDO_TITLESETTINGSICONS',pic:''},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'},{av:'AV35ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'gx.fn.getCtrlProperty("vSECUSERNAME1","Visible")',ctrl:'vSECUSERNAME1',prop:'Visible'},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME2","Visible")',ctrl:'vSECUSERNAME2',prop:'Visible'},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME3","Visible")',ctrl:'vSECUSERNAME3',prop:'Visible'},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV12GridState',fld:'vGRIDSTATE',pic:''},{av:'AV16OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_GRIDContainer.SortedStatus',ctrl:'DDO_GRID',prop:'SortedStatus'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'},{av:'AV18DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV19SecUserName1',fld:'vSECUSERNAME1',pic:''},{av:'AV20DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV22DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV23SecUserName2',fld:'vSECUSERNAME2',pic:''},{av:'AV24DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV26DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV27SecUserName3',fld:'vSECUSERNAME3',pic:''}]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV17DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV18DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV19SecUserName1',fld:'vSECUSERNAME1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV21DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV22DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV23SecUserName2',fld:'vSECUSERNAME2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV25DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV26DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV27SecUserName3',fld:'vSECUSERNAME3',pic:''},{av:'AV8SecUserPadre',fld:'vSECUSERPADRE',pic:'ZZZ9'},{av:'AV31ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV58Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV15OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV16OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV12GridState',fld:'vGRIDSTATE',pic:''},{av:'AV29DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV28DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV20DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV24DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV52IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV54IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'sPrefix'},{av:'this.GRIDPAGINATIONBARContainer.SelectedPage',ctrl:'GRIDPAGINATIONBAR',prop:'SelectedPage'}],[]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV17DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV18DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV19SecUserName1',fld:'vSECUSERNAME1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV21DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV22DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV23SecUserName2',fld:'vSECUSERNAME2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV25DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV26DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV27SecUserName3',fld:'vSECUSERNAME3',pic:''},{av:'AV8SecUserPadre',fld:'vSECUSERPADRE',pic:'ZZZ9'},{av:'AV31ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV58Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV15OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV16OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV12GridState',fld:'vGRIDSTATE',pic:''},{av:'AV29DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV28DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV20DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV24DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV52IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV54IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'sPrefix'},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'}],[{ctrl:'GRID',prop:'Rows'}]];
   this.EvtParms["DDO_GRID.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV17DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV18DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV19SecUserName1',fld:'vSECUSERNAME1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV21DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV22DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV23SecUserName2',fld:'vSECUSERNAME2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV25DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV26DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV27SecUserName3',fld:'vSECUSERNAME3',pic:''},{av:'AV8SecUserPadre',fld:'vSECUSERPADRE',pic:'ZZZ9'},{av:'AV31ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV58Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV15OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV16OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV12GridState',fld:'vGRIDSTATE',pic:''},{av:'AV29DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV28DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV20DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV24DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV52IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV54IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'sPrefix'},{av:'this.DDO_GRIDContainer.ActiveEventKey',ctrl:'DDO_GRID',prop:'ActiveEventKey'},{av:'this.DDO_GRIDContainer.SelectedValue_get',ctrl:'DDO_GRID',prop:'SelectedValue_get'}],[{av:'AV15OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV16OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_GRIDContainer.SortedStatus',ctrl:'DDO_GRID',prop:'SortedStatus'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A141SecUserId',fld:'SECUSERID',pic:'ZZZ9',hsh:true},{av:'AV52IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV54IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true}],[{av:'AV50Display',fld:'vDISPLAY',pic:''},{av:'gx.fn.getCtrlProperty("vDISPLAY","Link")',ctrl:'vDISPLAY',prop:'Link'},{av:'AV51Update',fld:'vUPDATE',pic:''},{av:'gx.fn.getCtrlProperty("vUPDATE","Link")',ctrl:'vUPDATE',prop:'Link'},{av:'AV53Delete',fld:'vDELETE',pic:''},{av:'gx.fn.getCtrlProperty("vDELETE","Link")',ctrl:'vDELETE',prop:'Link'}]];
   this.EvtParms["'ADDDYNAMICFILTERS1'"] = [[],[{av:'AV20DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'}]];
   this.EvtParms["'REMOVEDYNAMICFILTERS1'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV17DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV18DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV19SecUserName1',fld:'vSECUSERNAME1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV21DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV22DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV23SecUserName2',fld:'vSECUSERNAME2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV25DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV26DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV27SecUserName3',fld:'vSECUSERNAME3',pic:''},{av:'AV8SecUserPadre',fld:'vSECUSERPADRE',pic:'ZZZ9'},{av:'AV31ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV58Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV15OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV16OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV12GridState',fld:'vGRIDSTATE',pic:''},{av:'AV29DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV28DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV20DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV24DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV52IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV54IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'sPrefix'}],[{av:'AV28DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV29DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV12GridState',fld:'vGRIDSTATE',pic:''},{av:'AV20DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV21DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV22DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV23SecUserName2',fld:'vSECUSERNAME2',pic:''},{av:'AV24DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV25DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV26DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV27SecUserName3',fld:'vSECUSERNAME3',pic:''},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV17DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV18DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV19SecUserName1',fld:'vSECUSERNAME1',pic:''},{av:'gx.fn.getCtrlProperty("JSDYNAMICFILTERS","Caption")',ctrl:'JSDYNAMICFILTERS',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME2","Visible")',ctrl:'vSECUSERNAME2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME3","Visible")',ctrl:'vSECUSERNAME3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME1","Visible")',ctrl:'vSECUSERNAME1',prop:'Visible'},{av:'AV31ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV48GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV49GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV52IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:'vUPDATE',prop:'Visible'},{av:'AV54IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:'vDELETE',prop:'Visible'},{ctrl:'BTNINSERT',prop:'Visible'},{av:'AV35ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''}]];
   this.EvtParms["VDYNAMICFILTERSSELECTOR1.CLICK"] = [[{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV17DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''}],[{av:'gx.fn.getCtrlProperty("vSECUSERNAME1","Visible")',ctrl:'vSECUSERNAME1',prop:'Visible'},{ctrl:'vDYNAMICFILTERSOPERATOR1'}]];
   this.EvtParms["'ADDDYNAMICFILTERS2'"] = [[],[{av:'AV24DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'}]];
   this.EvtParms["'REMOVEDYNAMICFILTERS2'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV17DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV18DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV19SecUserName1',fld:'vSECUSERNAME1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV21DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV22DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV23SecUserName2',fld:'vSECUSERNAME2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV25DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV26DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV27SecUserName3',fld:'vSECUSERNAME3',pic:''},{av:'AV8SecUserPadre',fld:'vSECUSERPADRE',pic:'ZZZ9'},{av:'AV31ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV58Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV15OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV16OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV12GridState',fld:'vGRIDSTATE',pic:''},{av:'AV29DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV28DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV20DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV24DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV52IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV54IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'sPrefix'}],[{av:'AV28DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV20DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV12GridState',fld:'vGRIDSTATE',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV21DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV22DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV23SecUserName2',fld:'vSECUSERNAME2',pic:''},{av:'AV24DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV25DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV26DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV27SecUserName3',fld:'vSECUSERNAME3',pic:''},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV17DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV18DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV19SecUserName1',fld:'vSECUSERNAME1',pic:''},{av:'gx.fn.getCtrlProperty("JSDYNAMICFILTERS","Caption")',ctrl:'JSDYNAMICFILTERS',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME2","Visible")',ctrl:'vSECUSERNAME2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME3","Visible")',ctrl:'vSECUSERNAME3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME1","Visible")',ctrl:'vSECUSERNAME1',prop:'Visible'},{av:'AV31ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV48GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV49GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV52IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:'vUPDATE',prop:'Visible'},{av:'AV54IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:'vDELETE',prop:'Visible'},{ctrl:'BTNINSERT',prop:'Visible'},{av:'AV35ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''}]];
   this.EvtParms["VDYNAMICFILTERSSELECTOR2.CLICK"] = [[{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV21DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''}],[{av:'gx.fn.getCtrlProperty("vSECUSERNAME2","Visible")',ctrl:'vSECUSERNAME2',prop:'Visible'},{ctrl:'vDYNAMICFILTERSOPERATOR2'}]];
   this.EvtParms["'REMOVEDYNAMICFILTERS3'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV17DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV18DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV19SecUserName1',fld:'vSECUSERNAME1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV21DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV22DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV23SecUserName2',fld:'vSECUSERNAME2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV25DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV26DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV27SecUserName3',fld:'vSECUSERNAME3',pic:''},{av:'AV8SecUserPadre',fld:'vSECUSERPADRE',pic:'ZZZ9'},{av:'AV31ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV58Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV15OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV16OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV12GridState',fld:'vGRIDSTATE',pic:''},{av:'AV29DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV28DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV20DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV24DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV52IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV54IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'sPrefix'}],[{av:'AV28DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV24DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV12GridState',fld:'vGRIDSTATE',pic:''},{av:'AV20DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV21DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV22DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV23SecUserName2',fld:'vSECUSERNAME2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV25DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV26DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV27SecUserName3',fld:'vSECUSERNAME3',pic:''},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV17DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV18DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV19SecUserName1',fld:'vSECUSERNAME1',pic:''},{av:'gx.fn.getCtrlProperty("JSDYNAMICFILTERS","Caption")',ctrl:'JSDYNAMICFILTERS',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME2","Visible")',ctrl:'vSECUSERNAME2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME3","Visible")',ctrl:'vSECUSERNAME3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME1","Visible")',ctrl:'vSECUSERNAME1',prop:'Visible'},{av:'AV31ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV48GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV49GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV52IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:'vUPDATE',prop:'Visible'},{av:'AV54IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:'vDELETE',prop:'Visible'},{ctrl:'BTNINSERT',prop:'Visible'},{av:'AV35ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''}]];
   this.EvtParms["VDYNAMICFILTERSSELECTOR3.CLICK"] = [[{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV25DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''}],[{av:'gx.fn.getCtrlProperty("vSECUSERNAME3","Visible")',ctrl:'vSECUSERNAME3',prop:'Visible'},{ctrl:'vDYNAMICFILTERSOPERATOR3'}]];
   this.EvtParms["DDO_MANAGEFILTERS.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV17DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV18DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV19SecUserName1',fld:'vSECUSERNAME1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV21DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV22DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV23SecUserName2',fld:'vSECUSERNAME2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV25DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV26DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV27SecUserName3',fld:'vSECUSERNAME3',pic:''},{av:'AV8SecUserPadre',fld:'vSECUSERPADRE',pic:'ZZZ9'},{av:'AV31ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV58Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV15OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV16OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV12GridState',fld:'vGRIDSTATE',pic:''},{av:'AV29DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV28DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV20DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV24DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV52IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV54IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'sPrefix'},{av:'this.DDO_MANAGEFILTERSContainer.ActiveEventKey',ctrl:'DDO_MANAGEFILTERS',prop:'ActiveEventKey'}],[{av:'AV31ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV12GridState',fld:'vGRIDSTATE',pic:''},{av:'AV15OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV16OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV17DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV18DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV19SecUserName1',fld:'vSECUSERNAME1',pic:''},{av:'this.DDO_GRIDContainer.SortedStatus',ctrl:'DDO_GRID',prop:'SortedStatus'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("JSDYNAMICFILTERS","Caption")',ctrl:'JSDYNAMICFILTERS',prop:'Caption'},{av:'AV20DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV21DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV22DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV23SecUserName2',fld:'vSECUSERNAME2',pic:''},{av:'AV24DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV25DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV26DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV27SecUserName3',fld:'vSECUSERNAME3',pic:''},{av:'gx.fn.getCtrlProperty("vSECUSERNAME1","Visible")',ctrl:'vSECUSERNAME1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME2","Visible")',ctrl:'vSECUSERNAME2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME3","Visible")',ctrl:'vSECUSERNAME3',prop:'Visible'},{av:'AV48GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV49GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV52IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:'vUPDATE',prop:'Visible'},{av:'AV54IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:'vDELETE',prop:'Visible'},{ctrl:'BTNINSERT',prop:'Visible'},{av:'AV35ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''}]];
   this.EvtParms["'DOINSERT'"] = [[{av:'A141SecUserId',fld:'SECUSERID',pic:'ZZZ9',hsh:true}],[]];
   this.setVCMap("AV31ManageFiltersExecutionStep", "vMANAGEFILTERSEXECUTIONSTEP", 0, "int", 1, 0);
   this.setVCMap("AV58Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV15OrderedBy", "vORDEREDBY", 0, "int", 4, 0);
   this.setVCMap("AV16OrderedDsc", "vORDEREDDSC", 0, "boolean", 4, 0);
   this.setVCMap("AV12GridState", "vGRIDSTATE", 0, "WWPBaseObjects\WWPGridState", 0, 0);
   this.setVCMap("AV29DynamicFiltersIgnoreFirst", "vDYNAMICFILTERSIGNOREFIRST", 0, "boolean", 4, 0);
   this.setVCMap("AV28DynamicFiltersRemoving", "vDYNAMICFILTERSREMOVING", 0, "boolean", 4, 0);
   this.setVCMap("AV20DynamicFiltersEnabled2", "vDYNAMICFILTERSENABLED2", 0, "boolean", 4, 0);
   this.setVCMap("AV24DynamicFiltersEnabled3", "vDYNAMICFILTERSENABLED3", 0, "boolean", 4, 0);
   this.setVCMap("AV52IsAuthorized_Update", "vISAUTHORIZED_UPDATE", 0, "boolean", 4, 0);
   this.setVCMap("AV54IsAuthorized_Delete", "vISAUTHORIZED_DELETE", 0, "boolean", 4, 0);
   this.setVCMap("AV8SecUserPadre", "vSECUSERPADRE", 0, "int", 4, 0);
   this.setVCMap("AV8SecUserPadre", "vSECUSERPADRE", 0, "int", 4, 0);
   this.setVCMap("AV31ManageFiltersExecutionStep", "vMANAGEFILTERSEXECUTIONSTEP", 0, "int", 1, 0);
   this.setVCMap("AV58Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV15OrderedBy", "vORDEREDBY", 0, "int", 4, 0);
   this.setVCMap("AV16OrderedDsc", "vORDEREDDSC", 0, "boolean", 4, 0);
   this.setVCMap("AV12GridState", "vGRIDSTATE", 0, "WWPBaseObjects\WWPGridState", 0, 0);
   this.setVCMap("AV29DynamicFiltersIgnoreFirst", "vDYNAMICFILTERSIGNOREFIRST", 0, "boolean", 4, 0);
   this.setVCMap("AV28DynamicFiltersRemoving", "vDYNAMICFILTERSREMOVING", 0, "boolean", 4, 0);
   this.setVCMap("AV20DynamicFiltersEnabled2", "vDYNAMICFILTERSENABLED2", 0, "boolean", 4, 0);
   this.setVCMap("AV24DynamicFiltersEnabled3", "vDYNAMICFILTERSENABLED3", 0, "boolean", 4, 0);
   this.setVCMap("AV52IsAuthorized_Update", "vISAUTHORIZED_UPDATE", 0, "boolean", 4, 0);
   this.setVCMap("AV54IsAuthorized_Delete", "vISAUTHORIZED_DELETE", 0, "boolean", 4, 0);
   this.setVCMap("AV8SecUserPadre", "vSECUSERPADRE", 0, "int", 4, 0);
   this.setVCMap("AV31ManageFiltersExecutionStep", "vMANAGEFILTERSEXECUTIONSTEP", 0, "int", 1, 0);
   this.setVCMap("AV58Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV15OrderedBy", "vORDEREDBY", 0, "int", 4, 0);
   this.setVCMap("AV16OrderedDsc", "vORDEREDDSC", 0, "boolean", 4, 0);
   this.setVCMap("AV12GridState", "vGRIDSTATE", 0, "WWPBaseObjects\WWPGridState", 0, 0);
   this.setVCMap("AV29DynamicFiltersIgnoreFirst", "vDYNAMICFILTERSIGNOREFIRST", 0, "boolean", 4, 0);
   this.setVCMap("AV28DynamicFiltersRemoving", "vDYNAMICFILTERSREMOVING", 0, "boolean", 4, 0);
   this.setVCMap("AV20DynamicFiltersEnabled2", "vDYNAMICFILTERSENABLED2", 0, "boolean", 4, 0);
   this.setVCMap("AV24DynamicFiltersEnabled3", "vDYNAMICFILTERSENABLED3", 0, "boolean", 4, 0);
   this.setVCMap("AV52IsAuthorized_Update", "vISAUTHORIZED_UPDATE", 0, "boolean", 4, 0);
   this.setVCMap("AV54IsAuthorized_Delete", "vISAUTHORIZED_DELETE", 0, "boolean", 4, 0);
   GridContainer.addRefreshingVar(this.GXValidFnc[36]);
   GridContainer.addRefreshingVar(this.GXValidFnc[44]);
   GridContainer.addRefreshingVar(this.GXValidFnc[47]);
   GridContainer.addRefreshingVar(this.GXValidFnc[60]);
   GridContainer.addRefreshingVar(this.GXValidFnc[68]);
   GridContainer.addRefreshingVar(this.GXValidFnc[71]);
   GridContainer.addRefreshingVar(this.GXValidFnc[84]);
   GridContainer.addRefreshingVar(this.GXValidFnc[92]);
   GridContainer.addRefreshingVar(this.GXValidFnc[95]);
   GridContainer.addRefreshingVar({rfrVar:"AV8SecUserPadre"});
   GridContainer.addRefreshingVar({rfrVar:"AV31ManageFiltersExecutionStep"});
   GridContainer.addRefreshingVar({rfrVar:"AV58Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"AV15OrderedBy"});
   GridContainer.addRefreshingVar({rfrVar:"AV16OrderedDsc"});
   GridContainer.addRefreshingVar({rfrVar:"AV12GridState"});
   GridContainer.addRefreshingVar({rfrVar:"AV29DynamicFiltersIgnoreFirst"});
   GridContainer.addRefreshingVar({rfrVar:"AV28DynamicFiltersRemoving"});
   GridContainer.addRefreshingVar({rfrVar:"AV20DynamicFiltersEnabled2"});
   GridContainer.addRefreshingVar({rfrVar:"AV24DynamicFiltersEnabled3"});
   GridContainer.addRefreshingVar({rfrVar:"AV52IsAuthorized_Update"});
   GridContainer.addRefreshingVar({rfrVar:"AV54IsAuthorized_Delete"});
   GridContainer.addRefreshingParm(this.GXValidFnc[36]);
   GridContainer.addRefreshingParm(this.GXValidFnc[44]);
   GridContainer.addRefreshingParm(this.GXValidFnc[47]);
   GridContainer.addRefreshingParm(this.GXValidFnc[60]);
   GridContainer.addRefreshingParm(this.GXValidFnc[68]);
   GridContainer.addRefreshingParm(this.GXValidFnc[71]);
   GridContainer.addRefreshingParm(this.GXValidFnc[84]);
   GridContainer.addRefreshingParm(this.GXValidFnc[92]);
   GridContainer.addRefreshingParm(this.GXValidFnc[95]);
   GridContainer.addRefreshingParm({rfrVar:"AV8SecUserPadre"});
   GridContainer.addRefreshingParm({rfrVar:"AV31ManageFiltersExecutionStep"});
   GridContainer.addRefreshingParm({rfrVar:"AV58Pgmname"});
   GridContainer.addRefreshingParm({rfrVar:"AV15OrderedBy"});
   GridContainer.addRefreshingParm({rfrVar:"AV16OrderedDsc"});
   GridContainer.addRefreshingParm({rfrVar:"AV12GridState"});
   GridContainer.addRefreshingParm({rfrVar:"AV29DynamicFiltersIgnoreFirst"});
   GridContainer.addRefreshingParm({rfrVar:"AV28DynamicFiltersRemoving"});
   GridContainer.addRefreshingParm({rfrVar:"AV20DynamicFiltersEnabled2"});
   GridContainer.addRefreshingParm({rfrVar:"AV24DynamicFiltersEnabled3"});
   GridContainer.addRefreshingParm({rfrVar:"AV52IsAuthorized_Update"});
   GridContainer.addRefreshingParm({rfrVar:"AV54IsAuthorized_Delete"});
   this.Initialize( );
});
