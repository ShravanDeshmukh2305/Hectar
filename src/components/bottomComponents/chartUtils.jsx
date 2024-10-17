import React from 'react';
import {
  ResponsiveContainer,
  AreaChart as RechartsAreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Label,
  Line,
} from 'recharts';
import { Dot } from './Dot'; // Assuming you have a Dot component
import { ChartTooltip } from './ChartTooltip'; // Assuming you have a ChartTooltip component
import { ChartLegend } from './ChartLegend'; // Assuming you have a ChartLegend component
import {
  constructCategoryColors,
  getYAxisDomain,
  getColorClassName,
  valueFormatter,
  valueToPercent,
  getFillContent,
  hasOnlyOneValueForKey,
} from './utils'; // Assuming you have these utility functions

const AreaChart = ({
  data,
  categories,
  colors,
  showAxes = true,
  showLegend = true,
  onValueChange,
  activeLegend,
  enableLegendSlider = false,
  margin = { top: 10, right: 30, left: 0, bottom: 0 },
  yAxisWidth,
  legendPosition = 'center',
  tooltipFormatter = (value) => value,
  customTooltip = false,
  hideXAxis = false,
  hideYAxis = false,
  yAxisLabel,
  fill = 'solid',
  stacked = false,
  activeDot,
  allowDecimals,
  tooltipCallback,
  showTooltip = true,
  prevActiveRef = React.useRef(null),
  prevLabelRef = React.useRef(null),
  areaId = 'area-chart',
  onCategoryClick,
  onDotClick,
}) => {
  const categoryColors = constructCategoryColors(categories, colors);
  const [legendHeight, setLegendHeight] = React.useState(null);

  return (
    <div>
      <ResponsiveContainer width="100%" height={legendHeight ? `calc(100% - ${legendHeight}px)` : '100%'}>
        <RechartsAreaChart
          data={data}
          margin={margin}
          onMouseLeave={() => onValueChange?.(null, null)}
        >
          {showAxes && !hideXAxis && (
            <XAxis dataKey="name" stroke="gray" />
          )}
          {showAxes && !hideYAxis && (
            <YAxis
              width={yAxisWidth}
              hide={!showYAxis}
              axisLine={false}
              tickLine={false}
              type="number"
              domain={getYAxisDomain(data, categories)}
              tick={{ transform: 'translate(-3, 0)' }}
              fill=""
              stroke=""
              className="text-xs fill-gray-500 dark:fill-gray-500"
              tickFormatter={type === 'percent' ? valueToPercent : valueFormatter}
              allowDecimals={allowDecimals}
            >
              {yAxisLabel && (
                <Label
                  position="insideLeft"
                  style={{ textAnchor: 'middle' }}
                  angle={-90}
                  offset={-15}
                  className="fill-gray-800 text-sm font-medium dark:fill-gray-200"
                >
                  {yAxisLabel}
                </Label>
              )}
            </YAxis>
          )}
          <Tooltip
            wrapperStyle={{ outline: 'none' }}
            isAnimationActive={true}
            animationDuration={100}
            cursor={{ stroke: '#d1d5db', strokeWidth: 1 }}
            offset={20}
            position={{ y: 0 }}
            content={({ active, payload, label }) => {
              const cleanPayload = payload
                ? payload.map((item) => ({
                    category: item.dataKey,
                    value: item.value,
                    index: item.payload.index,
                    color: categoryColors.get(item.dataKey),
                    type: item.type,
                    payload: item.payload,
                  }))
                : [];

              if (tooltipCallback && (active !== prevActiveRef.current || label !== prevLabelRef.current)) {
                tooltipCallback({ active, payload: cleanPayload, label });
                prevActiveRef.current = active;
                prevLabelRef.current = label;
              }

              return showTooltip && active ? (
                customTooltip ? (
                  <customTooltip active={active} payload={cleanPayload} label={label} />
                ) : (
                  <ChartTooltip active={active} payload={cleanPayload} label={label} valueFormatter={valueFormatter} />
                )
              ) : null;
            }}
          />
          {showLegend && (
            <ChartLegend
              payload={data}
              categoryColors={categoryColors}
              setLegendHeight={setLegendHeight}
              activeLegend={activeLegend}
              onClick={onValueChange}
              enableLegendSlider={enableLegendSlider}
              legendPosition={legendPosition}
              yAxisWidth={yAxisWidth}
            />
          )}
          {categories.map((category) => {
            const categoryId = `${areaId}-${category.replace(/[^a-zA-Z0-9]/g, '')}`;
            return (
              <React.Fragment key={category}>
                <defs>
                  <linearGradient
                    id={categoryId}
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    {getFillContent({ fill, activeDot, activeLegend, category })}
                  </linearGradient>
                </defs>
                <Area
                  className={getColorClassName(categoryColors.get(category), 'stroke')}
                  strokeOpacity={activeDot || (activeLegend && activeLegend !== category) ? 0.3 : 1}
                  activeDot={(props) => {
                    const { cx: cxCoord, cy: cyCoord, stroke, strokeLinecap, strokeLinejoin, strokeWidth, dataKey } = props;
                    return (
                      <Dot
                        className={getColorClassName(categoryColors.get(dataKey), 'fill')}
                        cx={cxCoord}
                        cy={cyCoord}
                        r={5}
                        stroke={stroke}
                        strokeLinecap={strokeLinecap}
                        strokeLinejoin={strokeLinejoin}
                        strokeWidth={strokeWidth}
                        onClick={(_, event) => onDotClick(props, event)}
                      />
                    );
                  }}
                  dot={(props) => {
                    const { stroke, strokeLinecap, strokeLinejoin, strokeWidth, cx: cxCoord, cy: cyCoord, dataKey, index } = props;

                    if (
                      hasOnlyOneValueForKey(data, category) &&
                      !(activeDot || (activeLegend && activeLegend !== category)) ||
                      (activeDot?.index === index && activeDot?.dataKey === category)
                    ) {
                      return (
                        <Dot
                          cx={cxCoord}
                          cy={cyCoord}
                          r={5}
                          stroke={stroke}
                          fill=""
                          strokeLinecap={strokeLinecap}
                          strokeLinejoin={strokeLinejoin}
                          strokeWidth={strokeWidth}
                          className={getColorClassName(categoryColors.get(dataKey), 'fill')}
                        />
                      );
                    }
                    return <React.Fragment key={index}></React.Fragment>;
                  }}
                  key={category}
                  name={category}
                  type="linear"
                  dataKey={category}
                  stroke=""
                  strokeWidth={2}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  isAnimationActive={false}
                  connectNulls={stacked ? 'stack' : undefined}
                  fill={`url(#${categoryId})`}
                />
              </React.Fragment>
            );
          })}
          {/* Hidden lines to increase clickable target area */}
          {onValueChange ? categories.map((category) => (
            <Line
              className="cursor-pointer"
              strokeOpacity={0}
              key={category}
              name={category}
              type="linear"
              dataKey={category}
              stroke="transparent"
              fill="transparent"
              legendType="none"
              tooltipType="none"
              strokeWidth={12}
              connectNulls={stacked ? 'stack' : undefined}
              onClick={(props, event) => {
                event.stopPropagation();
                const { name } = props;
                onCategoryClick(name);
              }}
            />
          )) : null}
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  );
};

AreaChart.displayName = 'AreaChart';

export { AreaChart };
