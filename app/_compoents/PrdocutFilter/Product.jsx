
export default function Product({ result }) {
  return (
    <div className="flex justify-between max-sm:justify-center flex-wrap  mt-7 w-screen  p-4 ">
      {result && result.length > 0 ? (
        result.map((item, index) => <div key={index}>{item}</div>)
      ) : (
        <div className="h-full text-center w-screen my-6 text-[--text-color-Model]">
          <p>Opss! There's no available cars for your search</p>
          <span>Try to search for another Car Category</span>
        </div>
      )}
    </div>
  );
}
