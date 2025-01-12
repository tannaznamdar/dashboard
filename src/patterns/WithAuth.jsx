export default function withAuth(Component){

    let auth = true;

    if(auth){
      return props => <Component  auth={true} />
    }
  
    return props => (
      <div className="bg-white dark:bg-slate-800 h-screen text-center pt-5">
           <h2 className="text-red-900 font-bold text-3xl dark:text-white"> you are not access :( </h2>
      </div>
      
    )
  }
  