import React, { useState } from 'react'
import '../index.css';
export default function Word() {
  const [jobs, setJobs] = useState([]) // Tạo state 'jobs' để lưu trữ danh sách công việc, và 'setJobs' là hàm để cập nhật giá trị của 'jobs'
  const [job, setJob] = useState("") // Tạo state 'job' để lưu trữ giá trị của công việc mới, và 'setJob' là hàm để cập nhật giá trị của 'job'
  const [flag, setFlag] = useState(false) // Tạo state 'flag' để lưu trữ trạng thái của cờ, và 'setFlag' là hàm để cập nhật giá trị của 'flag'

  const changeJobs = (e) => { // Hàm 'changeJobs' được gọi khi giá trị của input công việc mới thay đổi, và nó cập nhật giá trị của 'job' dựa trên giá trị mới
    setJob(e.target.value)
  }

  //thêm cv
  const addJobs = () => {
    setJobs([...jobs, {
      name: job,
      id: Math.floor(Math.random() * 100),
      active: false
    }])
    setJob("")
  }
  // Hàm 'addJobs' được gọi khi người dùng nhấp vào nút 'Add Job', nó thêm
  // một công việc mới vào danh sách 'jobs' và cập nhật giá trị của 'job' thành chuỗi rỗng


  const changeStatus = (id) => {
    let newArr = [...jobs]; // Tạo một bản sao mới của mảng 'jobs' bằng cách sử dụng toán tử spread để giữ nguyên các phần tử của mảng gốc
    const index = newArr.findIndex(e => e.id == id); // Tìm vị trí của phần tử trong 'newArr' có id trùng khớp với id được truyền vào
    newArr[index].active = !newArr[index].active; // Đảo ngược giá trị của thuộc tính 'active' của phần tử tìm thấy
    setJobs(newArr); // Cập nhật giá trị của 'jobs' thành 'newArr', tức là thay thế mảng công việc hiện tại bằng mảng mới đã thay đổi
  };
  // Hàm 'changeJobs' được gọi khi giá trị của input công việc mới thay đổi, và nó cập nhật giá trị của 'job' dựa trên giá trị mới

  //xóa
  const deleteJob = (index) => {
    let newArr = [...jobs]
    newArr.splice(index, 1)
    setJobs(newArr)
  }

  //edit
  const [editIndex, setEditIndex] = useState("")
  const editJobs = (index) => {
    setJob(jobs[index].name)
    setFlag(true)
    setEditIndex(index)
  }

  //update
  const updateJobs = () => {
    let result = [...jobs]
    result[editIndex].name = job
    setJobs(result)
    setJob("")
    setFlag(false)

  }
  return (
    <>
      <table border={0} cellSpacing={40}>
        <h1>Todo List</h1>
        <span>Lorem ipsum dolor sit amet quod! </span>
        <div className='abc'>

          {jobs.map((item, index) => {
            return <div key={index} className='item-1'> <div style={{ textDecoration: item.active ? "line-through" : "" }}>{item.name}</div>
              <div><input type="checkbox" onClick={() => changeStatus(item.id)} />
              <button onClick={() => deleteJob(index)}> Xóa </button>  <button
                onClick={() => editJobs(index)}>Sửa</button></div>
              </div>

          })}
        </div>
        <span>Add to the todo list</span> <br />
        <input
          type='text'
          onChange={changeJobs}
          value={job}
        />
        <button onClick={flag ? updateJobs : addJobs}>Add Item</button>
      </table>
    </>
  )
}
