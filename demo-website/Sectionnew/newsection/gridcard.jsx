import React from "react";
function Index() {
  let data = [
    {
      name: "bilal",
      email: "bilal@gmail.com"
    },
    {
      name: "bilal",
      email: "bilal@gmail.com"
    },
    {
      name: "bilal",
      email: "bilal@gmail.com"
    },
  ];
  return (
    <>
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8">
        <div className="rounded border-gray-300  dark:border-gray-700 border-solid border-2 h-28">
          {data.map((item) => {
            return (
              <>
               <table>

  <tr>
    <td>{item.name} {item.email}</td>
  
   
  </tr>
</table>
              </>
            );
          })}
        </div>
         </div>
    </>
  );
}
export default Index;
