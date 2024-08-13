import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import * as venn from 'venn.js';

const VennDiagram = ({ sets, width, height }) => {
    const vennRef = useRef(null);

    useEffect(() => {
        if (vennRef.current) {
            // Clear any existing diagram
            d3.select(vennRef.current).selectAll('*').remove();

            // Generate the Venn diagram
            const chart = venn.VennDiagram()
                .width(width)
                .height(height);

            const diagram = d3.select(vennRef.current)
                .datum(sets)
                .call(chart);

            // Customize circle colors and labels
            diagram.selectAll('.venn-circle path')
                .style('fill-opacity', 0.6)
                .style('stroke', '#000')
                .style('stroke-width', '2px');

            diagram.selectAll('.venn-circle text')
                .style('fill', 'black')
                .style('font-size', '20px')
                .style('font-weight', 'bold');

            // Position the labels under their respective circles
            diagram.selectAll('.venn-circle text')
                .attr('y', function (d) {
                    const bbox = d3.select(this).node().getBBox();
                    return bbox.y - bbox.height / 2;
                })
                .style('text-anchor', 'middle');

            // Display the number of users in the middle of each circle or intersection
            diagram.selectAll('.venn-area')
                .append('text')
                .text(function (d) { return d.size; })
                .style('text-anchor', 'middle')
                .style('font-size', '12px')
                .style('fill', 'white') // Adjust color as needed
                .attr('dy', '0.35em')
                .attr('x', function (d) {
                    const bbox = d3.select(this.parentNode).select('path').node().getBBox();
                    return bbox.x + bbox.width / 2;
                })
                .attr('y', function (d) {
                    const bbox = d3.select(this.parentNode).select('path').node().getBBox();
                    return bbox.y + bbox.height / 2;
                });

        }
    }, [sets, width, height]);

    return <div ref={vennRef} />;
};

export default VennDiagram;
