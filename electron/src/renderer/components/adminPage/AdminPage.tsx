import classes from "./AdminPage.module.css"
import React, {useContext, useEffect, useState} from "react";
import { AuthenticationContext } from 'renderer/context/AuthenticationContext';
import { useNavigate } from 'react-router-dom';
import Button from 'renderer/components/Button';
import TextInput from 'renderer/components/Inputs';


enum Tabs {
  USERS = "users",
  VEHICLES = "vehicles",
  CREATECAR = "createCar"
}

const AdminPage = () => {
  const {jwt} = useContext(AuthenticationContext)
  const [tab, setTab] = useState<Tabs>(Tabs.USERS)
  const [users, setUsers] = useState<any[]>([])
  const [futureUsers, setFutureUsers] = useState<any[]>([])
  const [cars, setCars] = useState<any[]>([])
  const [carName, setCarName] = useState<any>("")
  const [carPrice, setCarPrice] = useState<any>("")
  const [carImage, setCarImage] = useState<any>("")
  const [loading, setLoading] = useState<boolean>(true)

  const onTabClick = (tab: Tabs) => {
    setTab(tab)
  }

  const fetchAll = () => {
    setUsers([])
    Promise.all([
        fetch('http://localhost:8000/api/.user/admin/users', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`
          },
        })
          .then(response => response.json())
          .then(data => {
            setUsers((prev) => [...prev, ...data.users])
            setLoading(false)
          }),
        fetch('http://localhost:8000/api/.user/admin/future-users', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`
          },
        })
          .then(response => response.json())
          .then(data => {
            console.log(data)
            setFutureUsers((prev) => [...prev, ...data.users])
          }),
        fetch('http://localhost:8000/car/all', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`
          }
        })
          .then(response => response.json())
          .then(data => {
            console.log(data)
            setCars(data)
          })
      ]
    ).then(() => {
      setLoading(false)
    })
  }


  useEffect(() => {
    if (!jwt) alert("no token")
    fetchAll()
  }, [])

  const onValidate = (id: string) => {
    setLoading(true);
    fetch(`http://localhost:8000/api/.user/admin/validate-users/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`
      },
    })
      .then(response => response.json())
      .then(data => {
        setLoading(false)
        if (data.status == "success") {
          fetchAll()
        }
      })
  }

  const onDeleteCar = (id: string) => {
    setLoading(true)
    fetch(`http://localhost:8000/car/admin/${id}/delete`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`
      }
    })
      .then(response => response.json())
      .then(data => {
        setLoading(false)
        if (data.status == "success") { // TODO: clean this please Pouette it's berk'
          fetchAll()
          setTab(Tabs.VEHICLES)
        }
      })
  }

  const onCreateCar = () => {
    setLoading(true);
    fetch(`http://localhost:8000/car/admin/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`
      },
      body: JSON.stringify({
        name: carName,
        price: carPrice,
        image: carImage,
      })
    })
      .then(response => response.json())
      .then(data => {
        setLoading(false)
        if (data.status == "success") { // TODO: clean this please Pouette it's berk'
          fetchAll()
          setTab(Tabs.VEHICLES)
        }
      })
  }

  if (loading) return <div>loading</div>
  return (
    <div className={classes.pageContainer}>
      <h1> Gestion Backoffice</h1>

      <div className={classes.tabContainer}>
        <h4 onClick={() => onTabClick(Tabs.USERS)} className={`${classes.tab} ${tab === Tabs.USERS && classes.selected}`}>
          liste des utilisateurs actifs
        </h4>
        <h4 onClick={() => onTabClick(Tabs.VEHICLES)} className={`${classes.tab} ${tab === Tabs.VEHICLES && classes.selected}`}>
          liste des vehicules
        </h4>
        <h4 onClick={() => onTabClick(Tabs.CREATECAR)} className={`${classes.tab} ${tab === Tabs.CREATECAR && classes.selected}`}>
          Create Vehicle
        </h4>
      </div>
      <div>
        {
          (tab === Tabs.USERS) && (
            <table className={classes.table}>
              <thead>
              <tr className={classes.tr}>
                <th className={classes.th} scope="col">Statut</th>
                <th className={classes.th} scope="col">Nom / Prénom</th>
                <th className={classes.th} scope="col">Coordonées</th>
                <th className={classes.th} scope="col">Nationalité</th>
                <th className={classes.th} scope="col">Actions</th>
              </tr>
              </thead>

              <tbody>
              {
                futureUsers.map((userInfo) => {
                  return (
                    <tr key={userInfo.id} className={classes.tr}>
                      <td className={classes.td}>{userInfo.validate ? "enabled" : "disabled"}</td>
                      <td className={classes.td}>{userInfo.name} {userInfo.lastname}</td>
                      <td className={classes.td}>{userInfo.email} {userInfo.phone}</td>
                      <td className={classes.td}>{userInfo.nationality}</td>
                      <td className={classes.td}>
                        {!userInfo.validate ?
                          <Button title="Validate" onClick={() => onValidate(userInfo.id)}/>
                          : <Button title="Edit"/>}
                      </td>
                    </tr>
                  )
                })
              }
              {
                users.map(({userInfo}) => {
                  if (!userInfo) return undefined
                  return (
                    <tr key={userInfo.id} className={classes.tr}>
                      <td className={classes.td}>{userInfo.validate ? "enabled" : "disabled"}</td>
                      <td className={classes.td}>{userInfo.name} {userInfo.lastname}</td>
                      <td className={classes.td}>{userInfo.email} {userInfo.phone}</td>
                      <td className={classes.td}>{userInfo.nationality}</td>
                      <td className={classes.td}>
                        {!userInfo.validate ?
                          <Button title="Verifier" onClick={() => onValidate(userInfo.id)}/>
                          : <Button title="Editer"/>}
                      </td>
                    </tr>
                  )
                })
              }
              </tbody>
            </table>
          )
        }
        {
          (tab === Tabs.VEHICLES) && (
            <table className={classes.table}>
              <thead>
              <tr className={classes.tr}>
                <th className={classes.th} scope="col">Name</th>
                <th className={classes.th} scope="col">Price</th>
                <th className={classes.th} scope="col">Image</th>
                <th className={classes.th} scope="col">Action</th>
              </tr>
              </thead>
              <tbody>
              {
                cars.map(car => {
                  return (
                    <tr key={car.id} className={classes.tr}>
                      <td className={classes.td}>{car.name}</td>
                      <td className={classes.td}>{car.price}</td>
                      <td className={classes.td}><img className={classes.tableImage} src={car.image} alt={car.name}/></td>
                      <Button title="Supprimer" onClick={() => onDeleteCar(car.id)}/>
                    </tr>
                  )
                })
              }
              </tbody>
            </table>
          )

        }
        {
          (tab === Tabs.CREATECAR) && (
            <div className={classes.form}>
              <h4>Create car</h4>
              <form>
                <TextInput title={"Name"} onChange={(e) => {setCarName(e.currentTarget.value)}}/>
                <TextInput title={"Price"} onChange={(e) => {setCarPrice(e.currentTarget.value)}}/>
                <TextInput title={"Image URL"} onChange={(e) => {setCarImage(e.currentTarget.value)}}/>
                <Button title={"Create"} onClick={onCreateCar}/>
              </form>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default AdminPage
