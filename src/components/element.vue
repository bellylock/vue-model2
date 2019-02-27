<template>
    <div class="content">
        <div>
            <router-link to="/">跳转到首页</router-link>
        </div>
        <el-select v-model="value" placeholder="请选择">
            <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select>
        <div class="table">
            <el-table
                    :data="tableData"
                    style="width: 100%">
                <el-table-column
                        label="日期"
                        width="180">
                    <template slot-scope="scope">
                        <i class="el-icon-time"></i>
                        <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        label="姓名"
                        width="180">
                    <template slot-scope="scope">
                        <el-popover trigger="hover" placement="top">
                            <p>姓名: {{ scope.row.name }}</p>
                            <p>住址: {{ scope.row.address }}</p>
                            <div slot="reference" class="name-wrapper">
                                <el-tag size="medium">{{ scope.row.name }}</el-tag>
                            </div>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                                @click="handleEdit(scope.$index, scope.row),dialogVisible = true">编辑
                        </el-button>
                        <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="tips">
            <el-dialog
                    title="提示"
                    :visible.sync="dialogVisible"
                    width="30%">
                <span class="editdate">日期：</span>
                <p contenteditable="true" class="context">{{this.maintext}}</p>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
            </el-dialog>
        </div>
        <div class="boxes">
            <span ref="show" @click="show()">点击改变内容（ref）内容</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ele",
        data() {
            return {
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: '',
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                dialogVisible: false,
                maintext:""
            }
        },
        methods: {
            handleEdit(index, row) {
                // console.log(index, row);

                var text = row.date;
                this.maintext = text;
                $(".context").text(text);
                document.title = text;
                console.log(text);
            },
            handleDelete(index, row) {
                // console.log(index, row);
                console.log(index, row);
            },
            show(){
                this.$refs.show.style.fontSize = "25px";
                this.$refs.show.style.color = "red";
                // this.$refs.show.innerHTML = 'asdasdas'
                this.$refs.show.innerText = 'change content'
            }
        }
    }
</script>

<style scoped lang="scss">
    .boxes{
        width: 100%;
        overflow: hidden;
        span{
            color: orange;
            font-size: 16px;
            cursor: pointer;
        }
    }
    .context{
        border: 1px solid #ccc;
        line-height: 30px;
        padding-left: 15px;
        &:focus{
            outline: none;
        }
    }
    .editdate{
        font-size: 14px;
        color: #000;
        display: inline-block;
        margin-bottom: 10px;
    }
</style>