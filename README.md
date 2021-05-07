# Angular-Practice-Tour_Of_Hero
學習Angular，使用官網的英雄之旅當練習 angular-tour-of-heroes

指令
啟動 ng serve --open

0507紀錄
學習到路由的部分
但我照著官網方式做 新增路由連結 (routerLink) 的時候
會報錯
錯誤訊息是這個:
'router-outlet' is not a known element: 1. If 'router-outlet' is an Angular component, then verify that it is part of this module. 2. If 'router-outlet' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.
在這邊找到了解答:
https://stackoverflow.com/questions/60377894/error-ng8001-router-outlet-is-not-a-known-element
到 app.module.ts 這個檔案
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule, =>新增這個就解決了bug!!!!
    BrowserModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


# AngularTourOfHeroes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.9.

