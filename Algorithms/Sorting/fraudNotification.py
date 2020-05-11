"""
* Solution to Fraud Notification problem
* https://www.youtube.com/watch?v=46V6tnxy_Vs
"""

# Helper function - get median value
def get_median(counting_sort_list, trailing_days, median_position):
    counter, left = 0, 0
    # Find number where we pass through the median
    while counter < median_position:
        counter += counting_sort_list[left]
        left += 1
    # Step back one time
    right = left
    left -= 1

    # if odd or if both left and right of even are same number
    if counter > median_position or trailing_days % 2 != 0:
        return left
    else:
        # Find right value for even
        while counting_sort_list[right] == 0:
            right += 1
        return (left + right) / (2)

def activityNotifications(expenditure, trailing_days):
    # Initialize counting sort array
    counting_sort_list = [0] * 201
    end_index = trailing_days

    # Perform counting sort
    for i in range(0, end_index):
        counting_sort_list[expenditure[i]] += 1
    current_index = 0
    total_notifications = 0

    # Determine odd or even median position
    if trailing_days % 2 == 0:
        median_position = int(trailing_days / 2)
    else:
        median_position = int(trailing_days / 2) + 1
        
    total_expenditure_length = len(expenditure)

    # Start and move along expenditures list
    while end_index < total_expenditure_length:
        median = get_median(counting_sort_list, trailing_days, median_position)
        print(f"spent {expenditure[end_index]}, median amount {median}")
        if expenditure[end_index] >= median * 2:
            total_notifications += 1

        # Modifiy the queue, first in first out
        counting_sort_list[expenditure[current_index]] -= 1
        counting_sort_list[expenditure[end_index]] += 1
        current_index += 1
        end_index += 1

    # Return total notifications
    return total_notifications


