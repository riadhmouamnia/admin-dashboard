import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.scss";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};

const SingleProductPage = async ({ params }: Props) => {
  const { id } = params;

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noproduct.jpg" alt="" fill />
        </div>
        Product one
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type="hidden" name="id" value={id} />
          <label>Title</label>
          <input type="text" name="title" placeholder="Product one" />
          <label>Price</label>
          <input type="number" name="price" placeholder="20" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="75" />
          <label>Color</label>
          <input type="text" name="color" placeholder="green" />
          <label>Size</label>
          <textarea name="size" placeholder="10" />
          <label>Category</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows={10}
            placeholder="desc"
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
