"use strict";angular.module("restoremyfaithinhumanityApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).otherwise({redirectTo:"/"})}]),angular.module("restoremyfaithinhumanityApp").controller("MainCtrl",["$scope","$http",function(a,b){b({method:"GET",url:"https://www.reddit.com/r/upliftingnews/hot.json?sort=hot"}).success(function(b){a.posts=b.data.children})}]),angular.module("restoremyfaithinhumanityApp").run(["$templateCache",function(a){a.put("views/main.html",'<main class="container left-container" ng-controller="MainCtrl"> <div class="row"> <section class="sidebar col-md-5 col-sm-12" style="background-image: url(images/background.jpg)"> <div class="site-info"> <div class="primary-info" style="color:#000000"> <h1>Uplifting. News. Only.</h1> </div> </div> </section> <!-- end sidebar --> <section class="col-md-7 col-sm-12 col-md-offset-5 main-content"> <div><i class="fa fa-child fa-6" style="font-size: 70px; margin-left: auto; margin-right: auto; width: 100%">&nbsp;&nbsp; <iframe src="https://ghbtns.com/github-btn.html?user=ltalhouarne&type=follow&count=true&size=small" frameborder="0" scrolling="0" width="200" height="30px"></iframe><a href="https://www.amazon.com/Loic-Talhouarne-Uplifting-News/dp/B01N0S3E73/ref=sr_1_1?ie=UTF8&qid=1500848221&sr=8-1&keywords=uplifting+news" target="_blank"><img src="images/avail.png"/></a></i></div> <br><br> <div class="home-page-posts animated fadeIn"> <div ng-repeat="post in posts"> <article class="post" ng-show="post.data.domain != \'self.UpliftingNews\'"> <div class="post-preview col-xs-10 no-gutter"> <h2><a target="_blank" ng-href="{{post.data.url}}">{{post.data.title}}</a></h2> <p class="meta"> <i class="fa fa-bookmark"></i> Source : {{post.data.domain}} <i class="link-spacer"></i> <i class="fa fa-arrow-up"></i> : {{post.data.ups}} <i class="link-spacer"></i> <i class="fa fa-comment-o"></i> : <a target="_blank" ng-href="https://reddit.com/{{post.data.permalink}}">{{post.data.num_comments}}</a> </p> </div> </article> </div> </div> <!-- Home page posts --> <footer class="split-footer">  </footer> </section> <!-- main content --> </div> <!--/row --> </main>')}]);
