const StatCard = ({ title, value }: { title: string; value: number }) => {
  return (
    <div className="stat">
      <span className="stat-label">{title}</span>
      <span className="stat-value">{value}</span>
    </div>
  )
}

export default StatCard
