var vm = new Vue({
    el:'#box',
    data:{
        editing:-1,//记录当前修改的是谁
        NewMassage:{
            name:'',
            author:'',
            price:''
        },
        massage:{
            name:'',
            author:'',
            price:''
        },
        bookData:[
            {
                id:1,
                bookName:'红楼梦',
                bookAuthor:'曹雪芹',
                bookPrice:98
            },
            {
                id:2,
                bookName:'西游记',
                bookAuthor:'吴承恩',
                bookPrice:980
            },
            {
                id:3,
                bookName:'水浒传',
                bookAuthor:'施耐庵',
                bookPrice:9
            },
            {
                id:3,
                bookName:'水浒传',
                bookAuthor:'施耐庵',
                bookPrice:9
            },
            {
                id:3,
                bookName:'水浒传',
                bookAuthor:'施耐庵',
                bookPrice:9
            }
        ]
    },
    methods:{
        //获取id
        getId:function () {
          var id = Math.random() *10;
          for(var i=0;i< this.bookData.length;i++){
              if(id === this.bookData[i].id){
                  id = this.getId();
              }
          }
          return id;
        },
        //添加
        addbook:function () {
            if(this.massage.name=='' || this.massage.author=='' || this.massage.price==''){
                alert('任何一个输入框的内容都不能为空');
                return;
            }
            this.bookData.push({
                id:this.getId(),
                bookName:this.massage.name,
                bookAuthor:this.massage.author,
                bookPrice:this.massage.price-0
            })
            this.massage.name = '';
            this.massage.author='';
            this.massage.price=''
        },
        //删除
        delbook:function (id) {
            for(var i=0;i<this.bookData.length;i++){
                if(id === this.bookData[i].id){
                    this.bookData.splice(i,1);
                }
            }
        },
        //总价
        totalPrice:function () {
            var price = 0;
            for(var i=0;i<this.bookData.length;i++){
                price += this.bookData[i].bookPrice-0;
            }
            return price;
        },
        //模态框获取原始数据
        getMassage:function (id) {
            for(var i=0;i<this.bookData.length;i++){
                if(id === this.bookData[i].id){
                    this.NewMassage.name = this.bookData[i].bookName;
                    this.NewMassage.author = this.bookData[i].bookAuthor;
                    this.NewMassage.price = this.bookData[i].bookPrice;
                    this.editing = i;
                }
            }
        },
        //保存编辑内容
        save:function () {
            this.bookData[this.editing].bookName = this.NewMassage.name;
            this.bookData[this.editing].bookAuthor = this.NewMassage.author;
            this.bookData[this.editing].bookPrice = this.NewMassage.price;
        }
    }
})