import matplotlib.pyplot as plt
import matplotlib.ticker as mtick
import csv

weeks = []
load = []
bounce = []


with open('./bounce-rate-vs-load-time.csv','r') as csvfile:
    plots = csv.reader(csvfile, delimiter=',')
    for row in plots:
        weeks.append(int(row[0]))
        bounce.append(float(row[1]) * 100)
        load.append(float(row[2]))

plt.xkcd()
fig, ax1 = plt.subplots()

color = 'tab:red'
ax1.set_xlabel('Week of the year')
ax1.set_ylabel('Bounce rate', color=color)
ax1.yaxis.set_major_formatter(mtick.PercentFormatter())
ax1.plot(weeks, bounce, color=color)
ax1.tick_params(axis='y', labelcolor=color)

ax2 = ax1.twinx()  # instantiate a second axes that shares the same x-axis

color = 'tab:blue'
ax2.set_ylabel('Average load time (s)', color=color)  # we already handled the x-label with ax1
ax2.plot(weeks, load, color=color)
ax2.tick_params(axis='y', labelcolor=color)

fig.tight_layout()  # otherwise the right y-label is slightly clipped
plt.show()
