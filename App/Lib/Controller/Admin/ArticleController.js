/**
 * Created by Arterli on 2015/4/16.
 */
module.exports = Controller("Admin/BaseController" , function(){
    "use strict";
    return {
      indexAction:function(){
         //文章管理
              this.display();

      },
        dataAction:function(){
                var data={
                    "total": 800,
                    "rows":[
                    {
                        "id": 0,
                        "name": "Item 0",
                        "price": "$0"
                    },
                    {
                        "id": 1,
                        "name": "Item 1",
                        "price": "$1"
                    },
                    {
                        "id": 2,
                        "name": "Item 2",
                        "price": "$2"
                    },
                    {
                        "id": 3,
                        "name": "Item 3",
                        "price": "$3"
                    },
                    {
                        "id": 4,
                        "name": "Item 4",
                        "price": "$4"
                    },
                    {
                        "id": 5,
                        "name": "Item 5",
                        "price": "$5"
                    },
                    {
                        "id": 6,
                        "name": "Item 6",
                        "price": "$6"
                    },
                    {
                        "id": 7,
                        "name": "Item 7",
                        "price": "$7"
                    },
                    {
                        "id": 8,
                        "name": "Item 8",
                        "price": "$8"
                    },
                    {
                        "id": 9,
                        "name": "Item 9",
                        "price": "$9"
                    },
                    {
                        "id": 10,
                        "name": "Item 10",
                        "price": "$10"
                    },
                    {
                        "id": 11,
                        "name": "Item 11",
                        "price": "$11"
                    },
                    {
                        "id": 12,
                        "name": "Item 12",
                        "price": "$12"
                    },
                    {
                        "id": 13,
                        "name": "Item 13",
                        "price": "$13"
                    },
                    {
                        "id": 14,
                        "name": "Item 14",
                        "price": "$14"
                    },
                    {
                        "id": 15,
                        "name": "Item 15",
                        "price": "$15"
                    },
                    {
                        "id": 16,
                        "name": "Item 16",
                        "price": "$16"
                    },
                    {
                        "id": 17,
                        "name": "Item 17",
                        "price": "$17"
                    },
                    {
                        "id": 18,
                        "name": "Item 18",
                        "price": "$18"
                    },
                    {
                        "id": 19,
                        "name": "Item 19",
                        "price": "$19"
                    },
                    {
                        "id": 20,
                        "name": "Item 20",
                        "price": "$20"
                    }
                ]}
                this.json(data)

        },
        addarticleAction:function(){
            if(this.isPost()){
             var param = this.post();
                 param.date=new Date().valueOf();
                console.log(param);
                var self = this;
                return D('article').add(param).then(function(id){
                    return self.success(id);
                }).catch(function(err){
                    return self.error(err);
                });
            }else{
                this.display();
            };
        }

    };
});