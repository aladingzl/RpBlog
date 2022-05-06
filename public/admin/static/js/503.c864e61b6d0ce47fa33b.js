(self.webpackChunkwall_blog=self.webpackChunkwall_blog||[]).push([[503],{12796:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.apiGetBlogList=function(e){return i.default.get("/blog/list",e)},t.apiGetBlogDetail=function(e){return i.default.get("/blog/info",e)},t.apiAddBlog=function(e){return i.default.postFile("/blog/add",e)},t.apiUpdateBlog=function(e){return i.default.postFile("/blog/update",e)},t.apiDelBlog=function(e){return i.default.get("/blog/del",e)};var o,l=n(64971),i=(o=l)&&o.__esModule?o:{default:o}},55918:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.apiUploadImg=function(e){return i.default.postFile("/uploadImage",e)},t.apiDelUploadImg=function(e){return i.default.post("/delUploadImage",e)};var o,l=n(64971),i=(o=l)&&o.__esModule?o:{default:o}},44562:(e,t,n)=>{"use strict";Object.defineProperty(t,"X",{value:!0});var o=s(n(94942)),l=s(n(36803)),i=s(n(42152)),r=n(12796),a=n(55918);function s(e){return e&&e.__esModule?e:{default:e}}t.Z={name:"articleList",components:{},computed:{},data:function(){return{listLoading:!1,searchForm:{keyword:""},blogList:[],columns:[{label:"_id",prop:"_id",slot:"_id"},{label:"类型",prop:"type",slot:"type",showTooltip:!0,width:"120"},{label:"标题",prop:"title",width:"160"},{label:"描述",prop:"desc",width:"160",showTooltip:!0},{label:"封面",slot:"fileCoverImgUrl",prop:"fileCoverImgUrl"},{label:"来源",prop:"source",slot:"source"},{label:"级别",prop:"level"},{label:"发布时间",prop:"releaseTime",slot:"releaseTime",width:"160"},{label:"是否可见",prop:"isVisible",slot:"isVisible"},{label:"作者",prop:"auth"},{label:"浏览量",prop:"pv"},{label:"点赞数",prop:"likes"},{label:"评论数",prop:"comments"},{label:"操作",slot:"operate",width:"150"}]}},created:function(){this.requestPageData=this.getBlogList,this.getBlogList()},mounted:function(){},methods:{handleCopyId:function(){var e=this,t=new i.default(".clipboardBtn");t.on("success",(function(n){e.$message.success("复制成功"),t.destroy()})),t.on("error",(function(n){e.$message.error("该浏览器不支持自动复制"),t.destroy()}))},getBlogList:function(){var e=this,t={keyword:this.searchForm.keyword,pageindex:this.pageInfo.pageNum,pagesize:this.pageInfo.pageSize};return this.listLoading=!0,(0,r.apiGetBlogList)(t).then((function(t){var n=t.data,o=n.list,l=n.total;e.blogList=o,e.pageInfo.total=l})).catch((function(t){e.listLoading=!1,console.log(t)})).finally((function(){e.listLoading=!1}))},handleDeleteBlog:function(e){var t=this;return(0,r.apiDelBlog)({id:e}).then((function(e){t.$message.success("删除成功"),t.getBlogList(!0)})).catch((function(e){console.log(e),t.$message.info("删除失败")})).finally((function(){}))},handleDeleteImg:function(e){return(0,a.apiDelUploadImg)({fileName:e}).then((function(e){})).catch((function(e){console.log(e)}))},handleDelete:function(e){var t=this;this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((0,l.default)(o.default.mark((function n(){var l,i;return o.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.handleDeleteBlog(e._id);case 2:l=e.fileCoverImgUrl.lastIndexOf("/"),i=e.fileCoverImgUrl.substring(l+1),t.handleDeleteImg(i);case 5:case"end":return n.stop()}}),n,t)})))).catch((function(){t.$message.info("已取消删除")}))},handleEdit:function(e){this.$router.push({path:"edit",query:{id:e._id}})}}}},19949:(e,t,n)=>{(e.exports=n(9252)(!1)).push([e.id,"/**\n * 变量样式\n */\n.tag[data-v-524b3e32] {\n  margin: 0 10px;\n}\n",""])},85503:(e,t,n)=>{"use strict";n.r(t),n.d(t,{__esModule:()=>o.X,default:()=>i});var o=n(44562);const l=o.Z;n(89988);const i=(0,n(51900).Z)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"article-list"},[n("zp-page-list",{scopedSlots:e._u([{key:"header",fn:function(){return[n("span",[e._v("文章列表")])]},proxy:!0}])},[e._v(" "),n("div",{attrs:{slot:"filter"},slot:"filter"},[n("el-form",{ref:"searchForm",staticClass:"zp-search-form",attrs:{inline:!0,model:e.searchForm}},[n("el-form-item",{attrs:{label:"关键词：",prop:"keyword"}},[n("el-input",{attrs:{placeholder:"请输入类型、标题"},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getBlogList(!0)}},model:{value:e.searchForm.keyword,callback:function(t){e.$set(e.searchForm,"keyword",t)},expression:"searchForm.keyword"}})],1),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.getBlogList(!0)}}},[e._v("\n          查询\n        ")])],1)],1),e._v(" "),n("div",{attrs:{slot:"list"},slot:"list"},[n("zp-table-list",{ref:"sensitiveBehaviorRecordList",attrs:{loading:e.listLoading,source:e.blogList,count:e.pageInfo.total,columns:e.columns},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange},scopedSlots:e._u([{key:"_id",fn:function(t){return[n("el-button",{staticClass:"clipboardBtn",attrs:{icon:"el-icon-document-copy",type:"primary",size:"mini","data-clipboard-text":t.row._id},on:{click:e.handleCopyId}},[e._v("复制\n          ")])]}},{key:"isVisible",fn:function(t){return[e._v("\n          "+e._s(t.row.isVisible?"是":"否")+"\n        ")]}},{key:"fileCoverImgUrl",fn:function(e){return[n("img",{staticStyle:{width:"60px","object-fit":"contain"},attrs:{src:e.row.fileCoverImgUrl}})]}},{key:"source",fn:function(t){return[e._v("\n          "+e._s(1===t.row.source?"原创":2===t.row.source?"转载":"翻译")+"\n        ")]}},{key:"releaseTime",fn:function(t){return[e._v("\n          "+e._s(e._f("formatTime")(t.row.releaseTime,"yyyy-MM-dd hh:mm:ss"))+"\n        ")]}},{key:"type",fn:function(t){return e._l(t.row.type,(function(t,o){return n("el-tag",{key:o,staticClass:"tag",attrs:{type:"primary","close-transition":""}},[e._v(e._s(t))])}))}},{key:"operate",fn:function(t){return[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(n){return e.handleEdit(t.row)}}},[e._v("编辑")]),e._v(" "),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],1)])],1)}),[],!1,null,"524b3e32",null).exports},89988:(e,t,n)=>{var o=n(19949);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);(0,n(45346).Z)("c822201c",o,!0,{})}}]);