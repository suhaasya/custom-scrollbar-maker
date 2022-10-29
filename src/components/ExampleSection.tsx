import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function ExampleSection() {
  const { style } = useContext(GlobalContext);
  // console.log(style);
  return (
    <div className="border-solid border border-black lg:w-1/3 overflow-y-scroll p-4 overflow-x-hidden bg-white">
      <style>{style}</style>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur vero
        totam repudiandae ut officiis quo facere adipisci, id provident iure
        aspernatur et optio reprehenderit architecto mollitia repellat
        exercitationem eligendi, suscipit quia praesentium consequuntur in
        itaque illo? Harum perspiciatis earum corrupti itaque officiis velit
        recusandae magnam placeat reprehenderit, tempore voluptates cumque.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
        perspiciatis doloribus aut reprehenderit hic libero. Tenetur voluptatum
        architecto cumque sunt adipisci recusandae similique esse neque minus
        culpa! Reiciendis hic, inventore quaerat atque nesciunt a nostrum enim
        saepe aperiam dicta ipsa quidem tenetur temporibus corrupti? Nisi itaque
        perferendis voluptas repellat vero minima unde eos minus laborum
        adipisci veritatis nemo vitae blanditiis ex impedit commodi repudiandae
        optio, neque recusandae quo delectus porro? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dolor quibusdam voluptatum dolore nulla
        nisi, id quidem fugiat quisquam officia voluptas fuga atque assumenda
        omnis optio voluptates at, facilis rerum excepturi obcaecati. Ducimus
        sint incidunt est necessitatibus laborum cumque praesentium rerum soluta
        optio quod vel, eaque explicabo cupiditate nulla ea eos ratione.
        Possimus pariatur ipsum saepe perspiciatis ratione dolore consectetur in
        minus esse totam, nulla ab quo cum dolorem, impedit doloribus.
      </p>
    </div>
  );
}

export default ExampleSection;
