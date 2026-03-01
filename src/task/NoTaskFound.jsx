const NoTaskFound = () => {
  return (
    <>
      <table className="table-fixed overflow-auto xl:w-full">
        <thead>
          <tr>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-12"></th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-75">
              Title
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
              Description
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-87.5">
              Tags
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-25">
              Priority
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-25">
              Options
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
            <td></td>
            
            <td className="text-3xl text-center text-yellow-300"> OOPS! </td>
            <td className="text-3xl text-center text-yellow-300"> NO TASK FOUND? </td>
            <td className="text-3xl text-center text-yellow-300"> PLEASE ADD TASK</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default NoTaskFound;
