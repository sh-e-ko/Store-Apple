// {
//     iphoneData.map((iphone, index) => (
//         <li key={index}>
//             <h2>{iphone.name}</h2>
//             {/* <p>{iphone.description}</p>
//           <p><strong>Price:</strong> {iphone.price}</p> */}
//             <p><strong>Storage:</strong> {iphone.storage.join(', ')}</p>
//             <p><strong>Release Date:</strong> {iphone.release_date}</p>
//             <p><strong>Screen Size:</strong> {iphone.screen_size}</p>
//             <p><strong>Processor:</strong> {iphone.processor}</p>
//             <p><strong>Camera:</strong> {iphone.camera}</p>
//             <p><strong>Battery:</strong> {iphone.battery}</p>
//         </li>
//     ))
// }



  // useEffect(() =>
  // {

  //   fetch('/public/Api/iphone_models.json')
  //     .then((response) => response.json())
  //     .then((data) => setIphoneData(data));
  // }, []);