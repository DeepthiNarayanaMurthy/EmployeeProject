using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Routing;

namespace EmployeeService
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);
        }
        //protected void Application_BeginRequest(object sender, EventArgs e)
        //{

        //    //if (Context.Request.Path.Contains("api/") && Context.Request.HttpMethod == "OPTIONS")
        //    //{

        //        Context.Response.AddHeader("Access-Control-Allow-Origin", "*");
        //        Context.Response.AddHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        //        Context.Response.AddHeader("Access-Control-Allow-Methods", "GET, POST PUT, DELETE, OPTIONS");
        //        Context.Response.AddHeader("Access-Control-Allow-Credentials", "true");
        //        Context.Response.End();
        //    //}

        //}
    }
}