export default function Settings({ data }) {
  console.log(data);
  return (
    <>
      {data && (
        <div>
          <h1>Settings2</h1>
          <p>{data.checkoutBranding.customizations.checkbox.cornerRadius}</p>
        </div>
      )}
    </>
  );
}
