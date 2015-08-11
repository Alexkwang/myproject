(function () {
'use strict';
angular.module('scotchApp').controller('teamController', ['$scope','$route','$element','$compile','ngDialog','teamService','DTOptionsBuilder','DTColumnBuilder',function($scope,$route,$element,$compile,ngDialog,teamService,DTOptionsBuilder,DTColumnBuilder) {
/*=========================================================================================*/
    $scope.options = {url: url+"upload"};
    var model = $scope.model = {
    personid:null,
    name: null,
    engilshname:null,
    jobtitle: null,
    engilshjobtitle:null,
    record:null,
    imageurl:null,
    imagename:null
    };

    var models = $scope.models={
    	modellist:[]
    };

$scope.refresh = function () {

         $scope.dtOptions = DTOptionsBuilder.fromFnPromise(function(){
            models.modellist = teamService.getallperson();
            return models.modellist;
         }) 
         .withPaginationType('full_numbers')
         .withOption('responsive', true) 
         .withOption('createdRow', function(row, data, dataIndex) {
            $compile(angular.element(row).contents())($scope);
         });


};

 $scope.refresh();
 $scope.$on("refresh", $scope.refresh);

 if($scope.editpersondata!=null)
 {
    model.Options="edit";
      debugger
      model.personid=$scope.editpersondata[0].personid;
      model.name=$scope.editpersondata[0].name;
      model.engilshname=$scope.editpersondata[0].engilshname;
      model.jobtitle=$scope.editpersondata[0].jobtitle;
      model.engilshjobtitle=$scope.editpersondata[0].engilshjobtitle;
      model.record=$scope.editpersondata[0].record;
      model.imageurl=$scope.editpersondata[0].imageurl;
      model.imagename=$scope.editpersondata[0].imagename;
 }

$scope.clickaddperson = function () {
         $scope.editprogramdata=null;
         ngDialog.open({
          template: '/pages/backend/teams/person.html',
          className: 'ngdialog-theme-plain',
          closeByDocument :false, //关闭背景区域关闭事件
          scope:$scope
           });
    };


$scope.$on('fileuploaddone', function(event, file){
 	model.imageurl=file.result.files[0].url;
  model.imagename=file.result.files[0].name;
 });

$scope.submitdata=function(){
	model.personid = model.personid==null?parseInt(Math.random()*100000+1):model.personid;

 if(model.Options=="edit" && $scope.editpersondata !=null)
{
 
  teamService.deletePerson($scope.editpersondata,function(){});
}
	teamService.saveperson(model,function(result){

		if(result.status='200')
			  { 
			    alertify.success(result.message);
			    ngDialog.close($('.ngdialog').attr("id"));
			  }
			  else
			  {
			    alertify.error(data.message);
			  } 

	});
};

$scope.reset=function(){
  model=null;
};


$scope.deletePerson=function(personid){

          ngDialog.openConfirm({
                              template: '/pages/backend/teams/confirm.html',                  
                          }).then(function (value) {
                                teamService.getPersonByID(personid,function(resultdata){
                                   if(resultdata!=null){
                                        teamService.deletePerson(resultdata.data,function(datarerult){
                                              if(datarerult.status='200')
                                              {
                                                alertify.success(datarerult.message);
                                                $route.reload();
                                              }
                                            });
                                        }
                                });

                          }, function (reason) {
                          });

};

$scope.editPerson=function(personid){

teamService.getPersonByID(personid,function(resultdata){
    if(resultdata!=null)
    {
        $scope.editpersondata=resultdata.data;

          ngDialog.open({
                  template: '/pages/backend/teams/person.html',
                  className: 'ngdialog-theme-plain',
                  closeByDocument :false, //关闭背景区域关闭事件
                  scope:$scope
                   });

    }

});

};


$scope.dtColumns = [
        DTColumnBuilder.newColumn("name").withTitle('姓名'),
        DTColumnBuilder.newColumn('engilshname').withTitle('英文名'),
        DTColumnBuilder.newColumn('jobtitle').withTitle('职称'),
        DTColumnBuilder.newColumn('engilshjobtitle').withTitle('英文职称'),
        DTColumnBuilder.newColumn(null).withTitle('操作').notSortable()
            .renderWith(function(data, type, full, meta) {
                return '<a class="green" style="cursor:pointer" ng-click="editPerson('+data.personid+')"><i class="ace-icon fa fa-pencil bigger-130"></i></a>'+
                        '<a class="red" style="margin-left:10px;cursor:pointer"  ng-click="deletePerson('+data.personid+')"><i class="ace-icon fa fa-trash-o bigger-130"></i></a>' ;
            })
    ];


 $scope.AutoLoad=function(){
  $route.reload();
 };



/*=========================================================================================*/
}]);
}).call(this);