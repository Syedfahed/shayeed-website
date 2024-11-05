const CustomerReviews = () => {
  return (
    <div
      id="review"
      className="py-5 flex flex-col flew gap-4 bg-gradient-to-r from-neutral-300 to-stone-400 p-10 rounded-md"
    >
      <h3 className=" text-2xl text-center my-3 font-bold">Customer Reviews</h3>
      <div className="flex gap-4 flex-wrap">
        <div className="bg-white rounded-md p-4">
          <p>
            Reliable and professional! Emerald Electricals quickly solved our
            wiring issue. Highly recommended for both home and business needs
          </p>
          <p className="font-bold text-right">~Rahul</p>
        </div>
        <div className="bg-white rounded-md p-4">
          <p>
            We trust Emerald Electricals for all our electrical maintenance.
            They are prompt, knowledgeable, and affordable.
          </p>
          <p className="font-bold text-right">~Syed Fahed</p>
        </div>
        <div className="bg-white rounded-md p-4">
          <p>
            If you need a trustworthy electrician in Hyderabad, go with Emerald
            Electricals. They provide excellent service!
          </p>
          <p className="font-bold text-right">~Kirana Shop</p>
        </div>
      </div>
      <div className="flex gap-2 text-sm text-blue-600 flex-wrap">
        <p>#best electricians</p>
        <p>#trusted electrical services in Hyderabad</p>
        <p>#customer reviews for electricians Hyderabad</p>
      </div>
    </div>
  );
};
export { CustomerReviews };
