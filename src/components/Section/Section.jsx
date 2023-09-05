export const Section = p => {
  return (
    <>
      <h1>{p.title}</h1>
      <div>{p.children}</div>
    </>
  );
};
