<script type="text/javascript">
        $(function () {

            $('#btnGet').click(function (event) {
                event.preventDefault();

                $('#table-javascript').bootstrapTable({
                    method: 'get',
                    //url: 'data2.json',
                    //url: '../WebService/jQTableService.asmx/GetProjectList',
                    data: getData(),
                    height: 400,
                    striped: true,
                    pagination: true,
                    pageSize: 50,
                    pageList: [10, 25, 50, 100, 200],
                    search: true,
                    showColumns: true,
                    minimunCountColumns: 2,
                    columns: [{
                        field: 'ProjectID',
                        title: 'Project Id',
                        align: 'center',
                        valign: 'middle',
                        sortable: true
                    }, {
                        field: 'ProjectName',
                        title: 'Project Name',
                        align: 'right',
                        valign: 'bottom',
                        sortable: true
                    }, {
                        field: 'ProjectMgr',
                        title: 'Project Manager',
                        align: 'center',
                        valign: 'middle',
                        sortable: true
                    }, {
                        field: 'ProjType_abbr',
                        title: 'Type',
                        align: 'left',
                        valign: 'top',
                        sortable: true
                    }, {
                        field: 'ProjectStatus_abbr',
                        title: 'Status',
                        align: 'center',
                        valign: 'middle',
                        sortable: true
                    },
                {
                    field: 'LinkSts_abbr',
                    title: 'Link',
                    align: 'center',
                    valign: 'middle',
                    sortable: true
                },
                {
                    field: 'WSName',
                    title: 'Program Name',
                    align: 'center',
                    valign: 'middle',
                    sortable: true//,
                    //                    formatter: operateFormatter,
                    //                    events: operateEvents
                }]
                });

            });

            function getData() {
                $.ajax({
                    type: "POST",
                    async: false,
                    dataType: "json",
                    url: "../WebService/jQTableService.asmx/GetProjectList",
                    contentType: "application/json; charset=utf-8",
                    //data: "{'iProjectId':'" + item[0] + "','ireuseStatus':'" + item[1] + "','iPersonId':'" + item[2] + "','strXML':'" + encodeURIComponent(item[3]) + "'}",
                    cache: false,
                    success: function (result) {
                        debugger;
                        var jsonObject = result.d[0];
                        return jsonObject.ProjectListData;
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        if (jqXHR.status == 400) {

                        }
                        else if (jqXHR.responseText.indexOf("siteminder") >= 0 || jqXHR.responseText.indexOf("html") >= 0) {

                        }
                        else {
                            alert("Request Error in Projects/Lifecycle. \njqXHR: " + jqXHR + "\n textStatus: " + textStatus + "\n errorThrown: " + errorThrown);

                        }
                    }
                });

            }


        });
    </script>
