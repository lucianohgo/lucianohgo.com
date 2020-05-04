import argparse
import matplotlib.pyplot as plt
import matplotlib.ticker as mtick
import csv

weeks = []
slow = []
moderate = []
fast = []

parser = argparse.ArgumentParser(description='Generate a conversion over time graph for different UX buckets')
parser.add_argument('--input', required=True, help="input file containing conversion over time data")
parser.add_argument('--title', required=True, help="graph title")
args = parser.parse_args()
input_file = args.input
title = args.title

with open(input_file,'r') as csvfile:
    plots = csv.reader(csvfile, delimiter=',')
    for i, row in enumerate(plots):
        weeks.append(i)
        slow.append(float(row[1]) * 100)
        moderate.append(float(row[2]) * 100)
        fast.append(float(row[3]) * 100)

plt.xkcd()
fig, ax1 = plt.subplots()

ax1.set_xlabel('Week index')
ax1.set_ylabel('Conversion')
ax1.yaxis.set_major_formatter(mtick.PercentFormatter())
ax1.plot(weeks, slow, label = 'slow', color='tab:red')
ax1.plot(weeks, moderate, label = 'moderate', color='tab:blue')
ax1.plot(weeks, fast, label='fast', color='tab:green')
plt.title(title, fontsize=16, fontweight='bold')
plt.legend(loc='upper left')

fig.tight_layout()  # otherwise the right y-label is slightly clipped
plt.show()
