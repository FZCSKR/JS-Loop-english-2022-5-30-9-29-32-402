
    <script>
         var i , j;
            for(i = 1;i <= 9;i ++){
                document.write("<br>");               // i 为行的乘数，j 为列数  每一行打印完后换行
                for(j = 1;j <= i;j ++){
                    sum = i * j;
                    document.write(i ,"*",j ,"=",sum,"   ");     // 使 "i" 和 "j" 能打印出来
                }
            }

    </script>
