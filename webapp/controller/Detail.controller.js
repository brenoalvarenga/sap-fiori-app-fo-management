sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  (Controller) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.Detail", {
      onPress() {
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("detail");
      },
    });
  }
);
