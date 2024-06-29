import { Products } from "./queries/queries";

export default function Shop() {
  return (
    <section>
      <div className="bigger-container">
        <div className="row">
          <Products />
        </div>
      </div>
    </section>
  );
}
