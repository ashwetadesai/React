export default function Stats({ items }) {
  const getitemlist = items.length;
  const checked = items.filter((item) => item.packed).length;
  const getPercent = (getitemlist / checked) * 100;
  return (
    <footer className="stats">
      <em>
        🛍 You have {getitemlist} items in your list, and you already packed{" "}
        {checked} ({getPercent}%)
      </em>
    </footer>
  );
}