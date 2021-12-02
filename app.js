const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const mysql=require("mysql2");
const session=require("express-session");
const flash=require("connect-flash");

 
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(session({
    secret:"secret",
    cookie:{maxAge:6000},
    resave:false,
    saveUninitialized:false
}));
app.use(flash());
app.set('view engine', 'ejs');
const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Qwerty@1",
    database:"plannerdb"
});
//Global Systems//
var studentid;
var facultyid;
var workshop_adminid;
var adminid;
//Global Systems//
app.get("/",function(req,res){
    res.render("sp_login",{message:req.flash("message")});
});
app.get("/Admin",function(req,res){
    let qry="SELECT * from admin where id="+adminid;
    con.query(qry,function(err,ans){
        if(err){
            console.log(err);
        }
        else{
            res.render("Admin",{usname:ans});
        }
    })
    
});
app.get("/logout",function(req,res){
    res.redirect("/");
});
app.get("/Student",function(req,res){
    let qry="SELECT * FROM student_course as fc inner join courses as f where fc.course_id=f.courseid AND fc.student_id="+studentid;
    let qry1="SELECT username FROM students where id="+studentid;
    con.query(qry,function(err,result){
        if(err){
            console.log(err);
        }
        else{
            con.query(qry1,function(err,ans){
                if(err){
                    console.log(err);
                }
                else{
                    res.render("st_homepage",{data:result,usname:ans,message:req.flash("message")});
                }
            })
           
        }
    });
   
});
app.get("/Events",function(req,res){
    let qry1="SELECT N_id,N_Message,Timing,nt.course_id,Type FROM notification as nt inner join student_course as st WHERE nt.course_id=st.course_id AND st.student_id="+studentid+" ORDER BY Timing ASC";
    let qry="SELECT * FROM student_course as fc inner join courses as f where fc.course_id=f.courseid AND fc.student_id="+studentid;
    let qry2="SELECT username FROM students where id="+studentid;
    let qry3="SELECT * FROM notification where Type='Workshop' ORDER BY Timing ASC" ;
    var val;
    var answer;
    con.query(qry,function(err,result){
        if(err){
            console.log(err);
        }
        else{
            val=result;
        }
    });
    con.query(qry2,function(err,result){
        if(err){
            console.log(err);
        }
        else{
            answer=result;
        }
    });
    con.query(qry1,function(err,result){
        if(err){
            console.log(err);
        }
        else{
            con.query(qry3,function(err,ans){
                if(err){
                    console.log(err);
                }
                else{
                    res.render("Events",{data:result,data1:val,usname:answer,wrkshop:ans});
                }
            })
            
        }
    })

})
app.get("/schedule",function(req,res){
    let qry="SELECT * FROM student_course as fc inner join courses as f where fc.course_id=f.courseid AND fc.student_id="+studentid;
    let qry1="SELECT * FROM courses as ut inner join (SELECT * FROM student_course as sc inner join schedule as sch where sc.course_id=sch.c_id AND sc.student_id="+studentid+") as kt where ut.courseid=kt.c_id";
    con.query(qry,function(err,result){
        if(err){
            console.log(err);
        }
        else{   
            con.query(qry1,function(err1,ans){
                if(err1){
                    console.log(err1);
                }
                else{
                     var array=["--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--"];
                     ans.forEach(function(x){
                         if(x.slot=='11'){
                             var k=x.slot;
                             var t=x.courseName;
                             array[0]=t;
                             
                         }
                         
                         if(x.slot=='12'){
                            var k=x.slot;
                            var t=x.courseName;
                            array[1]=t;
                            
                        }
                        
                        if(x.slot=='13'){
                            var k=x.slot;
                            var t=x.courseName;
                            array[2]=t;
                            
                        }
                       
                        if(x.slot=='14'){
                            var k=x.slot;
                            var t=x.courseName;
                            array[3]=t;
                            
                        }
                        
                        if(x.slot=='15'){
                            var k=x.slot;
                            var t=x.courseName;
                            array[4]=t;
                            
                        }
                        
                        if(x.slot=='16'){
                            var k=x.slot;
                            var t=x.courseName;
                            array[5]=t;
                           
                        }
                        
                        if(x.slot=='17'){
                            var k=x.slot;
                            var t=x.courseName;
                            array[6]=t;
                            
                        }
                        
                        if(x.slot=='21'){
                            var k=x.slot;
                            var t=x.courseName;
                            array[7]=t;
                            
                        }
                       
                        if(x.slot=='22'){
                            var k=x.slot;
                            var t=x.courseName;
                            array[8]=t;
                        }
                        
                        if(x.slot=='23'){
                            var k=x.slot;
                            var t=x.courseName;
                            array[9]=t;
                            
                        }
                        
                        if(x.slot=='24'){
                            var k=x.slot;
                            var t=x.courseName;
                            array[10]=t;
                            
                        }
                        
                        if(x.slot=='25'){
                            var k=x.slot;
                            var t=x.courseName;
                            array[11]=t;
                            
                        }
                        
                        if(x.slot=='26'){
                            var k=x.slot;
                            var t=x.courseName;
                            array[12]=t;
                           
                        }
                       
                        if(x.slot=='27'){
                            var k=x.slot;
                            var t=x.courseName;
                            array[13]=t;
                            
                        }
                      
                        if(x.slot=='31'){
                            var k=x.slot;
                            var t=x.courseName;
                            array[14]=t;
                           
                        }
                        
                        if(x.slot=='32'){
                            var k=x.slot;
                            var t=x.courseName;
                            array[15]=t;
                            
                        }
                        
                        if(x.slot=='33'){
                            var k=x.slot;
                            var t=x.courseName;
                            array[16]=t;
                            
                        }
                       
                        if(x.slot=='34'){
                            var k=x.slot;
                            var t=x.courseName;
                            array[17]=t;
                            
                        }
                        
                        if(x.slot=='35'){
                            var k=x.slot;
                            var t=x.courseName;
                            array[18]=t;
                            
                        }
                        
                        if(x.slot=='36'){
                            var k=x.slot;
                            var t=x.courseName;
                            array[19]=t;
                         
                        }
                       
                        if(x.slot=='37'){
                            var k=x.slot;
                            var t=x.courseName;
                            array[20]=t;
                           
                        }
                       
                        if(x.slot=='41'){
                            var k=x.slot;
                            var t=x.courseName;
                            array[21]=t;
                            
                        }
                       
                        if(x.slot=='42'){
                            var k=x.slot;
                            var t=x.courseName;
                            array[22]=t;
                            
                        }
                       
                        if(x.slot=='43'){
                            var k=x.slot;
                            var t=x.courseName;
                            array[23]=t;
                            
                        }
                        
                        if(x.slot=='44'){
                            var k=x.slot;
                            var t=x.courseName;
                            array[24]=t;
                        }
                       
                        if(x.slot=='45'){
                            var k=x.slot;
                            var t=x.courseName;
                            array[25]=t;
                        }
                       
                        if(x.slot=='46'){
                            var k=x.slot;
                            var t=x.courseName;
                            array[26]=t;
                        }
                       
                        if(x.slot=='47'){
                            var k=x.slot;
                            var t=x.courseName;
                            array[27]=t;
                        }
                        
                        if(x.slot=='51'){
                            var k=x.slot;
                            var t=x.courseName;
                            array[28]=t;
                           
                        }
                        
                        if(x.slot=='52'){
                            var k=x.slot;
                            var t=x.courseName;
                            array[29]=t;
                           
                        }
                       
                        if(x.slot=='53'){
                            var k=x.slot;
                            var t=x.courseName;
                            array[30]=t;
                        }
                        
                        if(x.slot=='54'){
                            var k=x.slot;
                            var t=x.courseName;
                            array[31]=t;
                        }
                        
                        if(x.slot=='55'){
                            var k=x.slot;
                            var t=x.courseName;
                            array[32]=t;
                        }
                        
                        if(x.slot=='56'){
                            var k=x.slot;
                            var t=x.courseName;
                            array[33]=t;
                        }
                        
                        if(x.slot=='57'){
                            var k=x.slot;
                            var t=x.courseName;
                            array[34]=t;
                        }
                        
                     })
                     
                    res.render("schedule",{data:result,answer:array});
                }
            })
           

                
        }
           
    });
});
app.get("/Plan",function(req,res){
    let qry="SELECT * FROM todo WHERE sid="+studentid;
    con.query(qry,function(err,result){
        if(err){
            console.log(err);
        }
        else{
            res.render("list", {data:result });
        }
    })
});
app.get("/Faculty",function(req,res){
    let qry="SELECT * FROM faculty_course as fc inner join courses as f where fc.cid=f.courseid AND fc.fid="+facultyid;
    let qry2="SELECT * FROM faculties WHERE id="+facultyid;
    con.query(qry,function(err,result){
        if(err){
            console.log(err);
        }
        else{
            con.query(qry2,function(err,answer){
                if(err){
                    console.log(err);
                }
                else{
                    res.render("Faculty",{data:result,usname:answer});
                }
            })
            
        }
    })
})
app.get("/Workshop",function(req,res){
    let qry="SELECT * FROM workshop_admin where id="+workshop_adminid;
    con.query(qry,function(err,result){
        if(err){
            console.log(err);
        }
        else{
            res.render("Workshop",{usname:result});
        }
    })
});

app.post("/Admin",function(req,res){
    const uname=req.body.usrname;
    const password=req.body.pswd;
    const option=req.body.opt;
    let qry1="INSERT INTO students (username,password) values ('"+uname+"','"+password+"')";
    let qry2="INSERT INTO faculties (username,password) values ('"+uname+"','"+password+"')";
    let qry3="INSERT INTO workshop_admin (username,password) values ('"+uname+"','"+password+"')";
    if(option==1){
        con.query(qry1,function(err){
            if(err){
                console.log(error);
            }
            else{

                res.redirect("/Admin");
            }
        })
    }
    else if(option==2){
        con.query(qry2,function(err){
            if(err){
                console.log(error);
            }
            else{
                res.redirect("/Admin");
            }
        })
    }
    else{
        con.query(qry3,function(err){
            if(err){
                console.log(error);
            }
            else{
                res.redirect("/Admin");
            }
        })
    }
});
app.post("/AdminP",function(req,res){
    const uname=req.body.user;
    
    const option=req.body.opt;
    let qry1="Delete from students where username='"+uname+"'";
    let qry2="Delete from faculties where username='"+uname+"'";
    let qry3="Delete from workshop_admin where username='"+uname+"'";
    if(option==1){
        con.query(qry1,function(err){
            if(err){
                console.log(err);
            }
            else{

                res.redirect("/Admin");
            }
        })
    }
    else if(option==2){
        con.query(qry2,function(err){
            if(err){
                console.log(err);
            }
            else{
                res.redirect("/Admin");
            }
        })
    }
    else{
        con.query(qry3,function(err){
            if(err){
                console.log(err);
            }
            else{
                res.redirect("/Admin");
            }
        })
    }
});
app.get("/Add",function(req,res){
    res.render("add");
});
app.get("/Workshop",function(req,res){
    res.redirect("Workshop");
})
app.post("/",function(req,res){
    const username=req.body.uname;
    const password=req.body.pwd;
    const option=req.body.opt;
    if(option==1){
    let qry="SELECT * FROM admin WHERE username='"+username+"' AND "+"password='"+password+"'";
    con.query(qry,function(err,result){
        if(err){
            console.log(err);
        }
        else{
            if(result==0){
                req.flash("message","Invalid Credentials!!!");
                res.redirect("/");
            }
            else{
                adminid=result[0].id;
                res.redirect("/Admin");
            }
        }
    })
}
else if(option==2){
    let qry="SELECT * FROM students WHERE username='"+username+"' AND "+"password='"+password+"'";
    con.query(qry,function(err,result){
        if(err){
            console.log(err);
        }
        else{
            if(result==0){
                req.flash("message","Invalid Credentials!!!");
                res.redirect("/");
            }
            else{
                studentid=result[0].id;
                res.redirect("/Student");
            }
        }
    })
}
else if(option==3){
    let qry="SELECT * FROM faculties WHERE username='"+username+"' AND "+"password='"+password+"'";
    con.query(qry,function(err,result){
        if(err){
            console.log(err);
        }
        else{
            if(result==0){
                req.flash("message","Invalid Credentials!!!");
                res.redirect("/");
            }
            else{
                facultyid=result[0].id;
                res.redirect("/Faculty");
            }
        }
    })
}
else{
    let qry="SELECT * FROM workshop_admin WHERE username='"+username+"' AND "+"password='"+password+"'";
    con.query(qry,function(err,result){
        if(err){
            console.log(err);
        }
        else{
            if(result==0){
                req.flash("message","Invalid Credentials!!!");
                res.redirect("/");
            }
            else{
                workshop_adminid=result[0].id;
                res.redirect("/Workshop");
            }
        }
    })
}
});
app.post("/Student",function(req,res){
    const code=req.body.code;
    let qry1="SELECT * FROM courses WHERE courseid='"+code+"'";
    con.query(qry1,function(err,ans){
        if(err){
            console.log(err);
        }
        else{
            if(ans.length!=0){
                let qry="INSERT INTO student_course (student_id,course_id) values ("+studentid+",'"+code+"')";
    con.query(qry,function(err){
        if(err){
            console.log(err);
        }
        else{
            req.flash("message","Enrolled Succesfully");
            res.redirect("/Student");
        }
    })
            }
            else{
                req.flash("message","Invalid Code!!!");
           res.redirect("/Student");
            }
        }
    })
    
});
app.post("/Plan",function(req,res){
    const task=req.body.task;
    const time=req.body.time1;
    const date=req.body.date1;
    const timing=date+" "+time;
    let qry="INSERT INTO todo (task,time,sid) values ('"+task+"','"+timing+"',"+studentid+")";
    con.query(qry,function(err){
        if(err){
            console.log(err);
        }
        else{
            res.redirect("/Plan");
        }
    })
});
app.post("/PlanB",function(req,res){
   const pt=req.body.del;
    let qry="delete from todo where id="+pt;
    con.query(qry,function(err){
        if(err){
            console.log(err);
        }
        else{
            res.redirect("/Plan");
        }
    })
});
app.post("/PlanC",function(req,res){
    console.log(req.body);
})
app.post("/delete",function(req,res){
    const itmToDelete=req.body.checkedItem;
    let qry="DELETE FROM activity WHERE id="+itmToDelete;
    con.query(qry,function(err){
        if(err){
            console.log(err);
        }
        else{
            res.redirect("/Plan");
        }
    })
});
app.post("/Add",function(req,res){
    const code= req.body.code;
    const cname=req.body.naam;
    const department=req.body.dep;
    let qry1="INSERT INTO courses (courseid,courseName,Department) values ('"+code+"','"+cname+"','"+department+"')";
    let qry2="INSERT INTO faculty_course (fid,cid) values ("+facultyid+",'"+code+"')";
    con.query(qry1,function(err){
        if(err)
        console.log(err);
        else{
            con.query(qry2,function(err){
                if(err)
                console.log(err);
                else{
                    res.redirect("/Add");
                }
            })
        }
    })
});
app.post("/Faculty",function(req,res){
    const topic=req.body.topic;
    const time=req.body.time1;
    const date=req.body.date1;
    const course=req.body.opt;
    const type=req.body.opt1;
    const timing=date+" "+time;
    const day=req.body.opt2;
    const slot=req.body.opt3;
    const sch=day+slot;
    var ans;
    if(type==1){
        ans="Assigment";
    }
    else if(type==2){
        ans="Quiz";
    }
    else if(type==3){
        ans="Lectures";
    }
    else{
        ans="Exams";
    }
    let qry="INSERT INTO notification (N_Message,Timing,course_id,Type) values ('"+topic+"','"+timing+"','"+course+"','"+ans+"')";
    let qry1="UPDATE schedule SET c_id ='"+course+"' WHERE (slot='"+sch+"')";
    con.query(qry,function(err){
        if(err)
        console.log(err);
        else{
            if(ans=="Lectures"){
            con.query(qry1,function(err1){
                if(err1){
                    console.log(err1);
                }
                else{
                    res.redirect("/Faculty");
                }
            })
        }
        else{
            res.redirect("/Faculty");
        }
        }
    });
});
app.post("/FacultyP",function(req,res){
    const topic=req.body.topic;
    const course=req.body.opt;
    const t=req.body.opt1;
    const day=req.body.opt2;
    const slot=req.body.opt3;
    const sch=day+slot;

    let qry="DELETE FROM notification where N_Message='"+topic+"' AND course_id='"+course+"'";
    let qry1="UPDATE schedule SET c_id ='--' WHERE (slot='"+sch+"')";
    con.query(qry,function(err){
        if(err)
        console.log(err);
        else{
            if(t=="3"){
                con.query(qry1,function(err){
                    res.redirect("/Faculty");
                })
            }
            else{
                res.redirect("/Faculty");
            }
            
        }
    });
});
app.post("/Workshop",function(req,res){
    const topic=req.body.topic;
    const time=req.body.time1;
    const date=req.body.date1;
    const type=req.body.option;
    const timing=date+" "+time;
    let qry="INSERT INTO notification (N_Message,Timing,course_id,Type) values ('"+topic+"','"+timing+"','"+type+"','Workshop')";
    con.query(qry,function(err){
        if(err){
            console.log(err);
        }
        else{
            res.redirect("/Workshop");
        }
    })
});
app.post("/WorkshopP",function(req,res){
    const topic=req.body.topic;
    let qry="DELETE FROM notification where N_Message='"+topic+"'";
    con.query(qry,function(err){
        if(err){
            console.log(err);
        }
        else{
            res.redirect("/Workshop");
        }
    })
});
app.listen(3000,function(req,res){
    console.log("Server started at port 3000");
});
























// con.connect(function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Database connection established");
//     }
// });
// let qry="SELECT * from users_details";
// con.query(qry,function(err,result){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(result);
//     }
// });
