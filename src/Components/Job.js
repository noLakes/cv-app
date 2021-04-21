function Job (props) {
  const { data, handleDelete } = props

  return (
    <div className='job-container'>
      <p>{data.employer}{data.role}</p>
      <button onClick={() => handleDelete(data.id)}>del</button>
    </div>
  )
}

export default Job
