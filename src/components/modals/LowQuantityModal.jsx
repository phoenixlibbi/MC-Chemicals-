// eslint-disable-next-line react/prop-types
export default function LowQuantityModal({ close, open }) {
  return (
    <div
      className={`inset-1 fixed transition-all duration-300 w-[100%] h-[100%] ${
        open ? "visible bg-black/20" : "invisible"
      } top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
    >
      <div
        className={`absolute w-[40%] h-[50%] overflow-y-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg`}
      >
        <h1 className="text-xl text-slate-500 font-semibold pl-5 py-3 inline-block fixed">
          Low Quantity Stocks
        </h1>
        <button
          onClick={close}
          className="inline-block float-right ml-5 my-2 py-1 px-3 border rounded-md font-medium bg-slate-200 hover:bg-red-400 hover:text-white  transition-colors duration-300"
        >
          close
        </button>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border-b-2 py-1">Name</th>
              <th className="border-b-2 py-1">Remaining Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b-2 py-1">The Sliding Mr. Bones</td>
              <td className="border-b-2 py-1">$196</td>
            </tr>
            <tr>
              <td className="border-b-2 py-1">Witchy Woman</td>
              <td className="border-b-2 py-1">$196</td>
            </tr>
            <tr>
              <td className="border-b-2 py-1">Shining Star</td>
              <td className="border-b-2 py-1">$196</td>
            </tr>
            <tr>
              <td className="border-b-2 py-1">Witchy Woman</td>
              <td className="border-b-2 py-1">$196</td>
            </tr>
            <tr>
              <td className="border-b-2 py-1">Witchy Woman</td>
              <td className="border-b-2 py-1">$196</td>
            </tr>
            <tr>
              <td className="border-b-2 py-1">Witchy Woman</td>
              <td className="border-b-2 py-1">$196</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
