import react from 'react' 

function List({people}) {
    return (
        <>
        {    people.map((info) => {
            const {id, name, age, image} = info;

            return(
                <div className="people" key={id}>
                  <div className="img">
                    <img src={image}/>
                  </div>
                  <div className="info" >
                    <h4>{name}</h4>
                    <p>Age: {age}</p>
                  </div>
                </div>
            )
          })}
          </>

    )
}

export default List;