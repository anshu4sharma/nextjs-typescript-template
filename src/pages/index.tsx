
const index = () => {
  const name: IUrl = {
    url: "anshu",
    surname: "anshu",
    age: 12
  }
  return (
    <div>
      <h1 className='text-center text-red-600'>Globals types defination  </h1>
      {
        name.surname
      }
      <br />
      {
        name.age
      }
    </div>
  )
}

export default index