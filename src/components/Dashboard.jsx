import React from 'react';
import { topics, topicColors, questions } from '../data/questions';
import { Activity, PieChart, BarChart3, Target, Clock, Layers } from 'lucide-react';

const Dashboard = ({ userProgress }) => {
  const totalQuestions = questions.length;
  const completedQuestions = Object.values(userProgress).filter(Boolean).length;
  const remainingQuestions = totalQuestions - completedQuestions;
  const overallPercentage = Math.round((completedQuestions / totalQuestions) * 100) || 0;

  // Donut Chart
  const renderDonutChart = () => {
    try {
        const size = 160;
        const center = size / 2;
        const radius = size * 0.42;
        const innerRadius = radius * 0.65;
        let currentAngle = -Math.PI / 2;
        
        if (!totalQuestions) return <div className="text-xs text-white/20">No data</div>;

        return (
      <div className="flex flex-col items-center w-full">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          {topics.map((topic, i) => {
            const topicTotal = questions.filter(q => q.topic === topic).length;
            const sliceAngle = (topicTotal / totalQuestions) * 2 * Math.PI - 0.05; // Added gap
            
            const x1 = center + radius * Math.cos(currentAngle);
            const y1 = center + radius * Math.sin(currentAngle);
            const x2 = center + radius * Math.cos(currentAngle + sliceAngle);
            const y2 = center + radius * Math.sin(currentAngle + sliceAngle);
            const ix1 = center + innerRadius * Math.cos(currentAngle + sliceAngle);
            const iy1 = center + innerRadius * Math.sin(currentAngle + sliceAngle);
            const ix2 = center + innerRadius * Math.cos(currentAngle);
            const iy2 = center + innerRadius * Math.sin(currentAngle);

            const largeArcFlag = sliceAngle > Math.PI ? 1 : 0;
            const pathData = [
              `M ${x1} ${y1}`,
              `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
              `L ${ix1} ${iy1}`,
              `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${ix2} ${iy2}`,
              'Z'
            ].join(' ');
            
            const result = (
              <path 
                key={topic} 
                d={pathData} 
                fill={topicColors[topic] || '#888'} 
                className="opacity-80 hover:opacity-100 transition-all cursor-pointer"
              >
                <title>{topic}: {topicTotal}</title>
              </path>
            );
            currentAngle += sliceAngle + 0.05; // Compensate for gap
            return result;
          })}
        </svg>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3 mt-8">
          {topics.map(topic => (
            <div key={topic} className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: topicColors[topic] || '#888' }} />
              <span className="text-[10px] font-black text-secondary/60 uppercase tracking-widest">{topic}</span>
            </div>
          ))}
        </div>
      </div>
    );
    } catch (e) {
        console.error('Error in renderDonutChart:', e);
        return <div className="text-xs text-white/20">Chart error</div>;
    }
  };

  const renderBarChart = () => {
    try {
        const margin = { top: 20, right: 30, bottom: 40, left: 80 };
        const width = 450 - margin.left - margin.right;
        const rowHeight = 32;
        const chartHeight = topics.length * rowHeight;
        
        return (
          <div className="flex flex-col items-center w-full overflow-x-auto pb-4">
            <svg width={width + margin.left + margin.right} height={chartHeight + margin.bottom} className="overflow-visible">
              {/* Grid & Axis Lines */}
              <line 
                x1={margin.left} y1={0} 
                x2={margin.left} y2={chartHeight} 
                className="stroke-white/10 stroke-[1px]" 
              />
              <line 
                x1={margin.left} y1={chartHeight} 
                x2={margin.left + width} y2={chartHeight} 
                className="stroke-white/10 stroke-[1px]" 
              />

              {/* X-Axis Ticks */}
              {[0, 0.25, 0.5, 0.75, 1].map((tick) => (
                <g key={tick} transform={`translate(${margin.left + tick * width}, ${chartHeight})`}>
                  <line y2={6} className="stroke-white/20 stroke-[1.5px]" />
                  <text 
                    y={20} 
                    textAnchor="middle" 
                    className="text-[10px] font-mono font-bold fill-secondary/40"
                  >
                    {tick === 0 ? '0' : tick === 1 ? '1' : tick}
                  </text>
                </g>
              ))}

              {/* Bars */}
              {topics.map((topic, i) => {
                const topicTotal = questions.filter(q => q.topic === topic).length;
                const topicCompleted = questions.filter(q => q.topic === topic && userProgress[q.id]).length;
                const progress = topicTotal > 0 ? topicCompleted / topicTotal : 0;
                
                const y = i * rowHeight + rowHeight / 2;
                const barWidth = progress * width;

                return (
                  <g key={topic} className="group/bar">
                    {/* Y-Axis Label */}
                    <text 
                      x={margin.left - 12} 
                      y={y} 
                      textAnchor="end" 
                      alignmentBaseline="middle" 
                      className="text-[10px] font-black fill-secondary/50 group-hover/bar:fill-white transition-colors uppercase tracking-tight"
                    >
                      {topic.length > 10 ? topic.substring(0, 8) + '..' : topic}
                    </text>
                    
                    {/* Bar Background */}
                    <rect 
                        x={margin.left} 
                        y={y - 8} 
                        width={width} 
                        height={16} 
                        fill="white" 
                        className="opacity-[0.03]" 
                        rx="8" 
                    />

                    {/* Progress Bar (Capsule) */}
                    <rect 
                        x={margin.left} 
                        y={y - 8} 
                        width={Math.max(16, barWidth)} 
                        height={16} 
                        fill={topicColors[topic] || '#9b5de5'} 
                        className="opacity-90 transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(155,93,229,0.3)]" 
                        rx="8" 
                    />
                  </g>
                );
              })}
            </svg>
          </div>
        );
    } catch (e) {
        console.error('Error in renderBarChart:', e);
        return <div className="text-xs text-white/20">Chart error</div>;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Overall Progress Section - Single Line Horizontal */}
      <div className="lg:col-span-12 glass rounded-3xl p-6">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-8">
            {/* Title */}
            <div className="flex items-center gap-3 shrink-0">
                <Activity className="w-5 h-5 text-accent" />
                <h3 className="text-sm font-black uppercase tracking-widest text-white whitespace-nowrap">Overall Progress</h3>
            </div>
            
            {/* Wider/Thinner Bar */}
            <div className="relative flex-1 h-6 w-full bg-white/5 rounded-full overflow-hidden flex items-center justify-center border border-white/5">
                <div 
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent to-neon-purple transition-all duration-1000"
                    style={{ width: `${overallPercentage}%` }}
                />
                <span className="relative z-10 font-mono font-black text-[10px] tracking-tighter">
                    {completedQuestions} / {totalQuestions} ({overallPercentage}%)
                </span>
            </div>

            {/* Stats Row */}
            <div className="flex items-center gap-4 shrink-0">
                <div className="flex items-center gap-3 bg-white/[0.03] border border-white/5 px-4 py-2 rounded-xl">
                    <span className="text-lg font-black text-accent">{completedQuestions}</span>
                    <span className="text-[9px] text-secondary/40 uppercase font-black tracking-widest">Done</span>
                </div>
                <div className="flex items-center gap-3 bg-white/[0.03] border border-white/5 px-4 py-2 rounded-xl">
                    <span className="text-lg font-black text-neon-purple">{remainingQuestions}</span>
                    <span className="text-[9px] text-secondary/40 uppercase font-black tracking-widest">Left</span>
                </div>
                <div className="flex items-center gap-3 bg-white/[0.03] border border-white/5 px-4 py-2 rounded-xl">
                    <span className="text-lg font-black text-white">{totalQuestions}</span>
                    <span className="text-[9px] text-secondary/40 uppercase font-black tracking-widest">Total</span>
                </div>
            </div>
        </div>
      </div>

      {/* Questions by Topic Section (40%) */}
      <div className="lg:col-span-5 glass rounded-3xl p-8">
        <div className="flex items-center gap-3 mb-8">
            <PieChart className="w-5 h-5 text-accent" />
            <h3 className="text-lg font-black uppercase tracking-widest text-white">Categories</h3>
        </div>
        <div className="flex flex-col items-center">
            {renderDonutChart()}
        </div>
      </div>

      {/* Progress by Topic Section (60%) */}
      <div className="lg:col-span-7 glass rounded-3xl p-8">
        <div className="flex items-center gap-3 mb-8">
            <BarChart3 className="w-5 h-5 text-accent" />
            <h3 className="text-lg font-black uppercase tracking-widest text-white">Progress by Topic</h3>
        </div>
        <div className="flex flex-col items-center">
            {renderBarChart()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
