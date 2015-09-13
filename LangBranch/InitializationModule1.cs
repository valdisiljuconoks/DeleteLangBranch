using System.Web;
using EPiServer;
using EPiServer.Core;
using EPiServer.Framework;
using EPiServer.Framework.Initialization;
using EPiServer.Framework.Web.Resources;
using EPiServer.ServiceLocation;
using InitializationModule = EPiServer.Web.InitializationModule;

namespace LangBranch
{
    [InitializableModule]
    [ModuleDependency(typeof (InitializationModule))]
    public class InitializationModule1 : IInitializableModule
    {
        public void Initialize(InitializationEngine context)
        {
            //Add initialization logic, this method is called once after CMS has been initialized

            var repo = ServiceLocator.Current.GetInstance<IContentEvents>();

            repo.MovingContent += RepoOnMovingContent;
        }

        public void Uninitialize(InitializationEngine context)
        {
            //Add uninitialization logic
        }

        private void RepoOnMovingContent(object sender, ContentEventArgs contentEventArgs)
        {
            if (contentEventArgs.TargetLink == ContentReference.WasteBasket)
            {
                contentEventArgs.CancelAction = true;
                contentEventArgs.CancelReason = "Just testing delete";
            }
        }
    }


    [ClientResourceRegister]
    public class ClientResourceRegister : IClientResourceRegister
    {
        public void RegisterResources(IRequiredClientResourceList requiredResources, HttpContextBase context)
        {
            //requiredResources.Require("epi.samples.Module1");
        }
    }

    //[ClientResourceProvider]
    //public class ClientResourceProvider : IClientResourceProvider
    //{
    //    public IEnumerable<ClientResource> GetClientResources()
    //    {
    //        return new[]
    //        {
    //        new ClientResource
    //        {
    //            Name = "epi.samples.Module1",
    //            Path = "/sample.js",
    //            ResourceType = ClientResourceType.Script,
    //        }
    //    };
    //    }
    //}
}